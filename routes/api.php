<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/video', [VideoController::class, 'makeVideo']);

Route::get('/test', [VideoController::class, 'test']);

Route::post('/create', [VideoController::class, 'create']);
Route::get('/c', [VideoController::class, 'testTwo']);

// Route::post('/video', [VideoController::class, 'ffmpeg']);