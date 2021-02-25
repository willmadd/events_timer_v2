<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class SubscriptionsController extends Controller
{
    public function getplansbycurrency($currency)
    {   

        $plans = DB::table('plans')->where('currency', $currency)->get();

        return $plans;
    }
}

