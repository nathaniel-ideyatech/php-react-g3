<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function feedbacks() {
        return $this->hasMany('App\Feedback');
    }

    public function category() {
        return $this->hasOne('App\ServiceCategory');
    }
}
