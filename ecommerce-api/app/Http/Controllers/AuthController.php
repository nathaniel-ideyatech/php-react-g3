<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    const REFRESH_TOKEN = 'refreshToken';

    public function register(Request $request){
        $validatedData = $request -> validate([
            'name' => 'required|max:55',
            'email'=> 'email|required',
            'password'=> 'required|confirmed',
            'role_id' => [
                'required',
                Rule::in(['2', '3'])
            ]
        ]);

        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=>$user, 'access_token'=>$accessToken]);
    }

    public function logout(Request $request){
        $accessToken = auth()->user()->token();

        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update([
            'revoked' => true
        ]);

        $accessToken->revoke();
        return response(['message'=>'You are successfully logged out']);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($loginData)){
            return response(['message'=>'Invalid credentials']);
        }

        return $this->authProxy('password', [
            'username' => $loginData['email'],
            'password' => $loginData['password']
        ]);
    }

    public function refresh(Request $request){
        $refreshToken = $request->cookie(self::REFRESH_TOKEN);
        return $this->authProxy('refresh_token', [
            'refresh_token' => $refreshToken
        ]);
    }

    public function authProxy($grantType,array $data=[]){
        $data = array_merge($data, [
            'client_id'     => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'grant_type'    => $grantType
        ]);

        $req = Request::create('/oauth/token','POST',$data);
        $content = json_decode(app()->handle($req)->getContent());

        $cookie = cookie(
            self::REFRESH_TOKEN,
            $content->refresh_token,
            864000,
            null,
            null,
            false,
            true
        );

        return response()->json([
            'user'=>auth()->user(),
            'access_token'=>$content->access_token,
            'expires_in'=>$content->expires_in
        ])->withCookie($cookie);
    }
}
