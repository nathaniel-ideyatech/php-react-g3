<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Service::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ServiceRequest $request)
    {
        $user_id = Auth::id();

        $service = new Service;
        $service->user_id = $request->user_id;
        $service->name = $request->name;
        $service->description = $request->description;
        $service->is_active = true;
        $service->price = $request->price;

        $success = $service->save();
        return ['success' => $success];

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Service::with('user:id,email,name')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(ServiceRequest $request, Service $service)
    {
        $service = Service::find($service->id);
        $service->name = $request->name;
        $service->description = $request->description;
        $service->is_active = true;
        $service->price = $request->price;
        $success = $service->save();
        return ['success' => $success];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        return ['success' => Service::destroy($service->id)];
    }

    public function getServicesByDate() {
        return Service::with('user:id,email,name')->orderBy('created_at', 'desc')->get();
    }

    public function getServicesByCategory($id) {
        return Service::with('user:id,email,name')->where('service_category_id', $id)->orderBy('created_at', 'desc')->get();
    }

    public function searchServicesByKeyword(Request $request) {
        if ($request->has('keyword')) {
            return Service::with('user:id,email,name')->where('name', 'LIKE', '%'.$request->keyword.'%')->orderBy('created_at', 'desc')->get();
        } else {
            return Service::with('user:id,email,name')->orderBy('created_at', 'desc')->get();
        }

    }
}
