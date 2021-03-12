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
        $user = User::find(auth()->user()->id);

        $paymentMethod = $request->id;

        $plan = $request->plan;

        if($user->subscribed('default'))
        {
            $payment_result = $user->subscription('default')->resume();

            $updatedUser = User::find(auth()->user()->id);
            
        } else{
            $payment_result = $request->user()->newSubscription(
                'default', $plan
                )
                ->trialUntil(Carbon::now()->addMonths(1))
                ->create($paymentMethod);
                
                $subscription_plan = Plan::select('level')->where('stripe_plan', $plan)->first();
                
                $monthly_download_allowance = DownLoadAmountLookUp::select('downloads_allowed')->where('key', $subscription_plan['level'])->first();
                
                $user->membership_level = $subscription_plan['level'];
                $user->downloads_remaining = $monthly_download_allowance['downloads_allowed'];
                $user->save();
                
                $updatedUser = User::find(auth()->user()->id);
                
            }
                return response()->json([
                    'result'=>$payment_result,
                    'subscriptionPlan'=>$subscription_plan,
                    'user'=>$updatedUser
                    ]
                    , 200);

    }
    public function updatePaymentMethod(Request $request){
        $id = $request->id;
        $user = User::find(auth()->user()->id);
        $user->updateDefaultPaymentMethod($id);
        $user->save();
        
        return response()->json([
            'result'=>'success',
            'payload'=>$id,
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
    public function changeSubscription(Request $request){

// $stripe_plan = Plan::

// $user = App\Models\User::find(1);

// $user->subscription('default')->swap('price_id');


        $newSubscription = $request->user()->subscription('default')->swap($request->stripe_plan);

        // $user = User::find(auth()->user()->id);
        // $user->membership_level = 'free';
        // $user->downloads_remaining = 0;
        
        $subscription_plan = Plan::select('level', 'name')->where('stripe_plan', $request->stripe_plan)->first();
        
        $monthly_download_allowance = DownLoadAmountLookUp::select('downloads_allowed')->where('key', $subscription_plan['level'])->first();
        
        $user = User::find(auth()->user()->id);
        $user->membership_level = $subscription_plan['level'];
        $user->downloads_remaining = $monthly_download_allowance['downloads_allowed'];
        $user->save();
        
        $updatedUser = User::find(auth()->user()->id);

        return response()->json([
            'success'=>true,
            'user'=>$updatedUser,
            'plan'=>$subscription_plan
            // "aswer"=>$request->selectedPlan,
        ]
            , 200);
    }
}

