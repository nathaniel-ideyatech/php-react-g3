<?php

use Illuminate\Database\Seeder;
use App\Role;
use Illuminate\Support\Facades\Auth;

class CheckOnly extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

//        $role = Role::findOrFail(Auth::user()->role_id);
        $role = Role::findOrFail(1);
        $permissions = $role->permissions;
//        echo $role->permissions->first();

//        $actionName = class_basename($request->route()->getActionname());

//        foreach ($permissions as $permission){
//            echo $permission;
//        }
    }
}
