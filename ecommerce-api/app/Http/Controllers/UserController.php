<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        return ['success' => "Success..."];

    }

    public function update(Request $request, User $user)
    {
        $user = User::findOrFail($user->id);
        $user->name = $request->name;
        $success = $user->save();

        return ['success' => $success];
    }
}
