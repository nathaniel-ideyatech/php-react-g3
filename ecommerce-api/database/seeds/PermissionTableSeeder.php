<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Route::getRoutes()->getRoutes() as $key => $route)
        {
            $action = $route->getActionname();
            $_action = explode('@',$action);

            $controller = $_action[0];
            $method = last($_action);

            $permission_check = DB::table('permissions')->where(['controller'=>$controller, 'method'=>$method])->first();

            if(!$permission_check){
                DB::table('permissions')->insert([
                    'controller' => $controller,
                    'method' => $method
                ]);
            }
        }

    }
}
