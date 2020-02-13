<?php

namespace App\Http\Middleware;

use App\Role;
use Closure;
use Illuminate\Support\Facades\Auth;

class RolesAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authUser = Auth::user();
        //$actionName = class_basename($request->route()->getActionname());
        //implement authorization for next sprint

        if($authUser->role_id == 1){
            return $next($request);
        }

        return response(['error'=> [
                "message"=>"Unauthorized Action",
                "code"=>403
            ]
        ]);
    }
}
