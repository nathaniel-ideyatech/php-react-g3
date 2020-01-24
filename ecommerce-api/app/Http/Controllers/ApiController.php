<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function register(Request $request){
        $validatedData = $request -> validate([
            'name' => 'required|max:55',
            'email'=> 'email|required',
            'password'=> 'required|confirmed'
        ]);

        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=>$user, 'access_token'=>$accessToken]);
    }

    public function login(Request $request){
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($loginData)){
            return response(['message'=>'Invalid credentials']);
        }

        $accessToken = auth() -> user() -> createToken('authToken')->accessToken;

        return response(['user'=>auth()->user(), 'access_token'=>$accessToken]);
    }
}
