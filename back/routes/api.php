<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FoodController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\UserController;
use App\Models\StopUsingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



/* we dont use controller more */

Route::get('/no-controller', [StopUsingController::class, 'index']);
Route::get('/stop{name}', [StopUsingController::class, 'getData']);



// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::post('/login', [AuthController::class, 'login'])->middleware(['verified']);

Route::get('/food', [FoodController::class, 'index']);
Route::get('/food/{id}', [FoodController::class, 'show']);
Route::get('/food/search/{name}', [FoodController::class, 'foodsearch']);
// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/food', [FoodController::class, 'store']);
    Route::put('/food/{id}', [FoodController::class, 'update']);
    Route::delete('/food/{id}', [FoodController::class, 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);

    /* restoreDelete */
    //softdelete list
    Route::get('/food/trash', [FoodController::class, 'softDel']);
    //restore softdelete foods
    Route::get('/food/trashed-restore', [FoodController::class, 'restoreDelete']);
    //delete permantent food
    Route::get('/food/trash-force/{id}', [FoodController::class, 'permanentDel']);


    Route::get('/loggeduser', [UserController::class, 'logged_user']); //logged_user
    /* users */
    // Route::get('/users', [UserController::class, 'index']);
    // Route::post('/users', [UserController::class, 'store']);
    // Route::get('/users/{id}', [UserController::class, 'show']);
    // Route::put('/users/{id}', [UserController::class, 'update']);
    // Route::delete('/users/{id}', [UserController::class, 'destroy']);
    /* Search user by name or, email */
    // Route::get('/users/search/{name}{email}', [UserController::class, 'search']);


    /* search by name */
    Route::get('/users/search/{name}', [UserController::class, 'search']);

    // Route::get('/users/search/{name}{email}', [UserController::class, 'search']);
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);

    //get all records of users including deleted users
    Route::get('/trash', [UserController::class, 'userrecordwithTrash']);
    //get only trashed users records
    Route::get('/trash', [UserController::class, 'onlyTrashusers']);


    Route::get('/send-verify-mail/{email}', [UserController::class, 'sendVerifyMail']);


    /* images */
    Route::get('/image', [ImageController::class, 'index']);
    Route::post('/image', [ImageController::class, 'store']);
    Route::get('/image/{id}', [ImageController::class, 'show']);
    Route::put('/image/{id}', [ImageController::class, 'update']);
    Route::post('/image/{id}', [ImageController::class, 'destroy']);
});


// Route::middleware(['auth', 'isAdmin'])->group(function () {
//     Route::post('/food', [FoodController::class, 'store']);
//     Route::put('/food/{id}', [FoodController::class, 'update']);
//     Route::delete('/food/{id}', [FoodController::class, 'destroy']);
//     Route::post('/logout', [AuthController::class, 'logout']);
// });


// php artisan optimize
// sail artisan make:middleware AdminMiddleware
// sail artisan config:cache
