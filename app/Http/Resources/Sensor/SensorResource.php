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
            'room' => $this->room,
            'unit'=> $this->unit,
            'average' => $this->measures->count() > 0 ? round($this->measures->sum('value')/$this->measures->count(),2) : 'not enough measures',
            'href' => [
                'measures' => route('measures.index', $this->id)
            ]
        ];
    }
}
