<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Sensor::class, function (Faker $faker) {
    return [
                    'name' => $faker->word,
                    'type' => $faker->word,
                    'unit' => 'Celsius',
                    'room' => 'Sala de Mestrado'
    ];
});
