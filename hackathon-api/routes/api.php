<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HackathonController;
use App\Http\Controllers\DeveloperController;
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

Route::get('/hackathons', [HackathonController::class, 'index']);
Route::get('/developers', [DeveloperController::class, 'index']);
Route::get('/developers/{id_hackathon}', [DeveloperController::class, 'find']);
Route::get('/topdevelopers', [DeveloperController::class, 'orderByRanking']);
