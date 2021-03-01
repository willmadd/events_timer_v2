<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DownloadAmountLookupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('download_amount_lookups')->insert([
            [
                'key' => "basic",
                'downloads_allowed' => 12,
            ],
            [
                'key' => "premium",
                'downloads_allowed' => 100,
            ]
        ]);
    }
}
