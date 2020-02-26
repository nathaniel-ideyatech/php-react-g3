<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'feedbacks';

    public function service() {
        return $this->belongsTo('App\Service');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
