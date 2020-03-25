<?php

use Illuminate\Database\Seeder;

class ServiceCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('service_categories')->insert([
            ['category' => 'beauty and cosmetics'],
            ['category' => 'health and wellness'],
            ['category' => 'home decorations'],
            ['category' => 'cars and motors'],
            ['category' => 'food and beverages'],
        ]);
    }
}
