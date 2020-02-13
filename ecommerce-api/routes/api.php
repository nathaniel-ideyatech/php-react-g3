<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register','AuthController@register');
Route::post('/login','AuthController@login');
Route::post('/login/refresh', 'AuthController@refresh');

Route::middleware('auth:api')->group(function(){
    Route::get('/logout','AuthController@logout');
    Route::apiResource('users', 'UserController')->middleware('roles.authority');
    Route::apiResource('services', 'ServiceController');

//    Route::get('/users')
});



