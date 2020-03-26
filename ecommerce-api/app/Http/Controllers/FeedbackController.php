<?php

namespace App\Http\Controllers;

use App\Feedback;
use App\Http\Requests\FeedbackRequest;
use Illuminate\Support\Facades\Auth;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Feedback::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeedbackRequest $request)
    {
        $user_id = Auth::id();

        $feedback = new Feedback;
        $feedback->user_id = $user_id;
        $feedback->service_id = $request->service_id;
        $feedback->rating = $request->rating;
        $feedback->comment = $request->comment;

        $success = $feedback->save();
        return ['success' => $success];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function show(Feedback $feedback)
    {
        return Feedback::with('user:id,email,name')->find($feedback->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function update(FeedbackRequest $request, Feedback $feedback)
    {
        $feedback = Feedback::find($feedback->id);
        $feedback->rating = $request->rating;
        $feedback->comment = $request->comment;
        $success = $feedback->save();
        return ['success' => $success];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        return ['success' => Feedback::destroy($feedback->id)];
    }

    public function getFeedbackByServiceId($id) {
        return Feedback::with('user:id,email,name')->where('service_id', $id)->orderBy('created_at', 'desc')->get();
    }

//    public function get
}
