<?php

use App\Http\Controllers\Stripe\StripeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/payment', [StripeController::class, 'index']);
Route::post('/checkout', [StripeController::class, 'checkout'])->name('checkout');
Route::get('/success', [StripeController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [StripeController::class, 'cancel'])->name('checkout.cancel');
Route::post('/webhook', [StripeController::class, 'webhook'])->name('checkout.webhook');






// Route::get('/login', function () {
//     return view('login');
// })->middleware('auth');
// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware('auth')->name('verification.notice');



// Route::get('/email/verify', function () {
//     return view('auth.verify-email');
// })->middleware('auth')->name('verification.notice');



// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();
//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');



// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return redirect('/dashboard');
// })->middleware(['auth', 'signed'])->name('verification.verify');







/* Facade */

// class Bike
// {
//     public function start()
//     {
//         return "Staring";
//     }
// }

// app()->bind('bike', function () {
//     return new Bike;
// });


// class Fish
// {

//     public function swin()
//     {
//         return "Swiming";
//     }

//     public function eat()
//     {
//         return "Eating";
//     }
// }
// app()->bind('fish', function () {
//     return new Fish;
// });

// class Facade
// {
//     public static function __callStatic($name, $arguments)
//     {
//         return app()->make(static::getFacadeAccessor())->$name();
//     }

//     protected static function getFacadeAccessor()
//     {
//         //
//     }
// }


// class FishFacade extends Facade
// {

//     protected static function getFacadeAccessor()
//     {
//         return 'fish';
//     }
// }

// class BikeFacade extends Facade
// {

//     protected static function getFacadeAccessor()
//     {
//         return 'bike';
//     }
// }


// dd(FishFacade::eat());
// dd(BikeFacade::start());
