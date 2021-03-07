<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MarketingController extends Controller
{
    public function newsletter(Request $request)
    {
        $user = Auth::user();
        $user->newsletter = $request->newsletter;
        $user->save();
        return response()->json(
            [
                'message'=>'success',
                'user'=>$user
            ],
                200
            );
        }
    }

