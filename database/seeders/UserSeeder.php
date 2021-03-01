<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            'name' => "william maddicott",
            'email' => 'willmaddicott@gmail.com',
            'password' => '$2y$10$yCJk48lnhvfMzytnZTUEW.oi7WO6hE7hllg3mQuziVpVxE/JP3t0K',
            'active'=>1,
            'activation_token'=>'sF3HNse4SNYgBXYvVmmyBkvlqZbf4X0AqljA5q0l5m6ccfek2peQ1YVzoDST',
            'created_at'=>'2021-02-10 18:03:04',
            'updated_at'=>'2021-02-10 18:03:04',
            'membership_level' => 'free',
        ]);
    }
}
