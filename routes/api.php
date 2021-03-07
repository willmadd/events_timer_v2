<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MarketingController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\SubscriptionsController;


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

Route::get('/test', [VideoController::class, 'ffmpeg']);

Route::post('/create', [VideoController::class, 'create']);
Route::get('/c', [VideoController::class, 'testTwo']);

Route::get('/plansbycurrency/{currency}', [SubscriptionsController::class, 'getplansbycurrency']);

Route::post('/charge', [PaymentsController::class, 'singleCharge']);

Route::post('/cleanup', [VideoController::class, 'cleanup']);


// Route::post('/stripe/success', [WebhookController::class, 'handleInvoicePaymentSucceeded']);
Route::stripeWebhooks('/stripe/success');
// Route::post('/video', [VideoController::class, 'ffmpeg']);

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::get('signup/activate/{token}', [AuthController::class, 'signupActivate']);

    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
        Route::post('create', [VideoController::class, 'create']);
        Route::post('/subscribe', [SubscriptionsController::class, 'createSubscription']);
        Route::get('/recentvideos', [AuthController::class, 'recentVideos']);
        Route::post('/tbsndkf', [AuthController::class, 'changePassword']);
        Route::get('/cancelsubscription', [SubscriptionsController::class, 'cancelSubscription']);
        Route::post('/newsletter', [MarketingController::class, 'newsletter']);
        Route::post('/updatepaymentmethod', [SubscriptionsController::class, 'updatePaymentMethod']);
    });
});