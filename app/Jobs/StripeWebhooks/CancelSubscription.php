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

class CancelSubscription implements ShouldQueue
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

        $user = User::where('stripe_id', $charge['customer'])->first();

        $user->membership_level="free";

        $user->downloads_remaining=0;

        $user->save();

    }
}
