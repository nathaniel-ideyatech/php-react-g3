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
Route::get('/home/services', 'ServiceController@getServicesByDate');
Route::get('/services/{id}', 'ServiceController@show');
Route::get('/feedbacks/service/{id}', 'FeedbackController@getFeedbackByServiceId');
Route::resource('service_categories', 'ServiceCategoryController')->only([
    'index', 'show'
]);
Route::middleware('auth:api')->group(function(){
    Route::get('/logout','AuthController@logout');
    Route::get('/user/profile/current-user','UserController@getCurrentUser');
    Route::get('/users/active', 'UserController@getActiveUsersOnly')->middleware('roles.authority');
    Route::resource('users', 'UserController')->middleware('roles.authority');
    Route::apiResource('services', 'ServiceController')->except(['show']);
    Route::apiResource('feedbacks', 'FeedbackController')->middleware('roles.authority');
});

Route::resource('users', 'UserController');



