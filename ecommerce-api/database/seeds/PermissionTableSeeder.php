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

        $permission_ids = []; // an empty array of stored permission IDs

        foreach (Route::getRoutes()->getRoutes() as $key => $route)
        {
            $action = $route->getActionname();
            $_action = explode('@',$action);

            $controller = $_action[0];
            $method = last($_action);

            $permission_check = DB::table('permissions')->where(['controller'=>$controller, 'method'=>$method])->first();
            echo !$permission_check;
            if(!$permission_check){
                $id = DB::table('permissions')->insertGetId([
                    'controller' => $controller,
                    'method' => $method
                ]);

                array_push($permission_ids,$id);
            }
        }

    }
}
