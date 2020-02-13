<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Group3 Admin',
            'email' => 'group3_admin'.'@gmail.com',
            'password' => bcrypt('group3AdminPassword'),
            'role_id' => '1',
        ]);
    }
}
