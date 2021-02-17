<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Illuminate\Support\Str;

use FFMpeg;

use FFMpeg\Format\Video\X264;

use Illuminate\Http\Request;

class CreateCountdownVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

     protected $command;

     protected $id;

    public function __construct($command, $id)
    {
        $this->command = $command;

        $this->id = $id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        exec($this->command);

        return response()->json(
        [
            'success'=>true,
        ],
            200
        );
    }
}
