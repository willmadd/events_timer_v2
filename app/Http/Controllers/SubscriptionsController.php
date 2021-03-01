<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

use App\Models\User;

use App\Models\Plan;

use App\Models\DownloadAmountLookup;

class SubscriptionsController extends Controller
{
    public function getplansbycurrency($currency)
    {   

        $plans = DB::table('plans')->where('currency', $currency)->get();

        return $plans;
    }

    public function createSubscription(Request $request)
    {
        $paymentMethod = $request->id;

        $plan = $request->plan;

        $payment_result = $request->user()->newSubscription(
            'default', $plan
        )
        ->trialUntil(Carbon::now()->addMonths(1))
        ->create($paymentMethod);

        $subscription_plan = Plan::select('level')->where('stripe_plan', $plan)->first();

        $monthly_download_allowance = DownLoadAmountLookUp::select('downloads_allowed')->where('key', $subscription_plan['level'])->first();

        $user = User::find(auth()->user()->id);
        $user->membership_level = $subscription_plan['level'];
        $user->downloads_remaining = $monthly_download_allowance['downloads_allowed'];
        $user->save();

        return response()->json([
            'result'=>$payment_result,
            'subscriptionPlan'=>$subscription_plan,
        ]
            , 200);

    }
    public function cancelSubscription(Request $request)
    {   

        $cancellation = $request->user()->subscription('default')->cancel();

        $user = User::find(auth()->user()->id);
        $user->membership_level = 'free';
        $user->downloads_remaining = 0;
        $user->save();

        $updatedUser = User::find(auth()->user()->id);

        return response()->json([
            'cancellation'=>$cancellation,
            'user'=>$updatedUser
        ]
            , 200);
    }
}

