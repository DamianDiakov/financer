<?php

use Illuminate\Http\Request;
use App\Models\Expense;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::get('first', function () {
    return Inertia::render('first', [
        'page' => 'First page',
        'now' => Carbon::now()
    ]);
});

Route::get('second', function () {
    return Inertia::render('second', [
        'page' => 'Second Page',
        'data' => Expense::all()
    ]);
});

Route::get('second/test/{date}', function ($date) {
    $date = Carbon::parseFromLocale($date, "bg")->format('Y-m-d');

    $expenses = Expense::query()
        ->where('date', $date)
        ->get();

    return Inertia::render('second', [
        'page' => 'Secon Page with query',
        'data' => $expenses
    ]);
})->name('test');

Route::get('third', function () {
    return Inertia::render('third', [
        'page' => 'Third page',
    ]);
});

Route::get('third/{date}', function ($date) {
    $date = Carbon::parseFromLocale($date, "bg")->format('Y-m-d');

    $expenses = Expense::query()
        ->where('date', $date)
        ->get();

    return Inertia::render('third', [
        'data' => $expenses,
    ]);
})->name('third');
