<?php

namespace App\Http\Controllers;

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

    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;

        //to implement
        return ['success' => $request->name];
    }

    public function update(Request $request, User $user)
    {
//        $user = User::findOrFail($user->id);
//        $user->name = $request->name;
//        $success = $user->save();
        return ['success' => $user->name];
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
