<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MeasureReasource extends Resource
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
            'value' => $this->value,
            'unit' => $this->unit,
            'timestamps' => $this->timestamps
        ];
    }
}
