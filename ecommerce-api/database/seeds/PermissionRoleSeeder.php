<?php

use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_role = DB::table('roles')->where('name','admin')->first();
        $allPermission = DB::table('permissions')->get();
        foreach ($allPermission as $permission){
            DB::table('permission_role')->insert([
                'permission_id' => $permission->id,
                'role_id' => $admin_role->id
            ]);
        }
    }
}
