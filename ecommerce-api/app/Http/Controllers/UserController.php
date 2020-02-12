<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAuthenticatedUsers(Request $request){
        $user = Auth::user();
        return response(['user'=>$user]);
    }
}
