<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show(User $user)
    {
        return User::findOrFail($user->id);
    }

    public function store(UserRequest $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role_id = $request->role_id;
        $success = $user->save();

        return ['success' => $success];
    }

    public function update(UserRequest $request, User $user)
    {
        $user = User::findOrFail($user->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role_id = $request->role_id;
        $success = $user->save();
        return ['success' => $success];
    }

    public function destroy(User $user)
    {
        $user = User::findOrFail($user->id);
        $user->is_active = 0;

        $success = $user->save();
        return ['success' => $success];
    }

    public function getActiveUsersOnly(){
        return User::all()->where('is_active',1);
    }
}
