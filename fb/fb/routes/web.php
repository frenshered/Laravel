<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::post('/api/data', 'GetDataController@getData');

Route::post('/api/contacts-form', 'MessageController@submit');

Route::post('/api/registration', 'RegistrationController@registering');

Route::post('/api/login', 'LoginController@logining');

