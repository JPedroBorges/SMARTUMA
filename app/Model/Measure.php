<?php

namespace App\Model;

use App\Model\Sensor;
use Illuminate\Database\Eloquent\Model;

class Measure extends Model
{
    public function sensor(){
        return $this->belongsTo(Sensor::class);
    }
}
