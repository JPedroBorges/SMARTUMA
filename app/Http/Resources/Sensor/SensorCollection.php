<?php

namespace App\Http\Resources\Sensor;

use Illuminate\Http\Resources\Json\Resource;

class SensorCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'type' => $this->type,
            'room' => $this->room,
            'href' => [
                'link' => route('sensors.show', $this->id)
            ]
        ];
    }
}
