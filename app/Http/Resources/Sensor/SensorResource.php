<?php

namespace App\Http\Resources\Sensor;

use Illuminate\Http\Resources\Json\Resource;

class SensorResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'type' => $this->type,
            'unit'=> $this->unit,
            'room' => $this->room
        ];
    }
}
