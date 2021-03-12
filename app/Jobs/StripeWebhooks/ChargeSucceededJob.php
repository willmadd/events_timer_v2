<?php

namespace App\Jobs\StripeWebhooks;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\WebhookClient\Models\WebhookCall;
use App\Models\Payment;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendPaymentNotification;
use App\Models\User;
use App\Models\Plan;
use App\Models\DownloadAmountLookup;
use Illuminate\Support\Facades\DB;


class ChargeSucceededJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

        /** @var \Spatie\WebhookClient\Models\WebhookCall */
        
        public $webhookCall;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(WebhookCall $webhookCall)
    {
        $this->webhookCall = $webhookCall;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $charge = $this->webhookCall->payload['data']['object'];

        Payment::create([
            'customer_id' => $charge['customer'],
            'stripe_id' => $charge['id'],
            'currency' => $charge['currency'],
            'billing_reason' => $charge['billing_reason'],
            'amount' => $charge['amount_paid'],
            'email' => $charge['customer_email']
        ]);

        $data = [
            'email'=>$charge['customer_email'],
            'amount' => $charge['amount_paid'],
            'billing_reason' => $charge['billing_reason'],
            'currency' => $charge['currency'],
        ];



        Mail::send('email-template', $data, function($message){
            $message->to('payments@eventscountdown.net', 'eventscountdown.net')->subject('new payment recieved');
            $message->from('noreply@eventscountdown.net', 'eventscountdoen.net');
        });

        if($charge['billing_reason']==="subscription_cycle"||$charge['billing_reason']==="subscription_create")
        {
            $user = User::where('stripe_id', $charge['customer'])->first();

            $stripe_plan = DB::table('subscriptions')->where('user_id',$user->id)->value('stripe_plan');

            $level = Plan::where('stripe_plan', $stripe_plan)->value('level');

            $downloads_allowed = DownloadAmountLookup::where('key', $level)->value('downloads_allowed');

            $user->downloads_remaining = $downloads_allowed;

            // dd($user);

            $user->save();
        }
    }
}
