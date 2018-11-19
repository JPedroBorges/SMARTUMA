<?php

use App\Model\Sensor;
use Faker\Generator as Faker;

$factory->define(App\Model\Measure::class, function (Faker $faker) {
    return [
        'sensor_id' => function(){
            return Sensor::all()->random();
        },
        'value' => $faker->randomFloat(2,12,31),
        'unit' => 'ºC'
    ];
});
