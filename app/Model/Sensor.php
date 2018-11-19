<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    public function measures(){
        return $this->hasMany(Measure::class);
    }
}
