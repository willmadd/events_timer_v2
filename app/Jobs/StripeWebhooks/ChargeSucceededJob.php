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
    }
}
