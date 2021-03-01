<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('plans')->insert([
            [
                'name' => "GBP basic",
                'slug' => 'gbp-basic',
                'stripe_plan' => 'price_1IP2r1LrsmQqsvaa0XuOJHBZ',
                'cost'=>9,
                'currency'=>'GBP',
                'description'=>'GBP basic test description',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'level'=>'basic'
            
            ],
            [
                'name' => "GBP Premium",
                'slug' => 'gbp-premium',
                'stripe_plan' => 'price_1IP2r1LrsmQqsvaavhJrwC1r',
                'cost'=>25,
                'currency'=>'GBP',
                'description'=>'GBP premium test description',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'level'=>'premium'
            
            ],
            [
                'name' => "JPY basic",
                'slug' => 'jpy-basic',
                'stripe_plan' => 'jpy-basic',
                'cost'=>250,
                'currency'=>'JPY',
                'description'=>'JPY basic test description',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'level'=>'basic'
            
            ],
            [
                'name' => "JPY premium",
                'slug' => 'jpy-premium',
                'stripe_plan' => 'jpy-premium',
                'cost'=>760,
                'currency'=>'JPY',
                'description'=>'JPY premium test description',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'level'=>'premium'
            
            ],


        ]);
    }
}
