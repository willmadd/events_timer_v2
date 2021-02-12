<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PaymentsController extends Controller
{
    public function singleCharge(Request $request)
    {   if($request->user())
        {
            return $this->loggedUserCharge($request);
        }else{
            return $this->guestCharge($request);
        }


    }

    private function guestCharge($request)
    {
        $paymentMethod= $request->id;

        try {
            $stripeCharge = (new User)->charge(100, $paymentMethod);
            return response()->json([
                "res"=>$stripeCharge,
                "success"=>true]
            , 200);

        } catch (Exception $e) {
            return response()->json([
                "success"=>false
            ], 406);
        }


    }

    private function loggedUserCharge($request)
    {
        $paymentMethod= $request->id;

        $stripeCharge = (new User)->charge(100, $paymentMethod);

        return response()->json($stripeCharge);
    }
}
