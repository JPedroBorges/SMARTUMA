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

        $date1 = date('Y-m-d 00:00:00');
        $date2 = date('Y-m-d 00:00:00',strtotime("-1 days"));
        $date3 = date('Y-m-d 00:00:00',strtotime("-2 days"));
        $date4 = date('Y-m-d 00:00:00',strtotime("-3 days"));
        $date5 = date('Y-m-d 00:00:00',strtotime("-4 days"));
        $date6 = date('Y-m-d 00:00:00',strtotime("-5 days"));
        $date7 = date('Y-m-d 00:00:00',strtotime("-6 days"));


        return [
            'name' => $this->name,
            'type' => $this->type,
            'room' => $this->room,
            'unit'=> $this->unit,
            'average'=> [
                'average1' => $this->measures->where('created_at', '>=', $date1)->avg('value') ? $this->measures->where('created_at', '>=', $date1)->avg('value') : 'not enough data',
                'average2' => $this->measures->where('created_at', '>=', $date2)->where('created_at', '<=', $date1)->avg('value') ? $this->measures->where('created_at', '>=', $date2)->where('created_at', '<=', $date1)->avg('value')  : 'not enough data',
                'average3' => $this->measures->where('created_at', '>=', $date3)->where('created_at', '<=', $date2)->avg('value') ? $this->measures->where('created_at', '>=', $date3)->where('created_at', '<=', $date2)->avg('value')  : 'not enough data',
                'average4' => $this->measures->where('created_at', '>=', $date4)->where('created_at', '<=', $date3)->avg('value') ? $this->measures->where('created_at', '>=', $date4)->where('created_at', '<=', $date3)->avg('value')  : 'not enough data',
                'average5' => $this->measures->where('created_at', '>=', $date5)->where('created_at', '<=', $date4)->avg('value') ? $this->measures->where('created_at', '>=', $date5)->where('created_at', '<=', $date4)->avg('value')  : 'not enough data',
                'average6' => $this->measures->where('created_at', '>=', $date6)->where('created_at', '<=', $date5)->avg('value') ? $this->measures->where('created_at', '>=', $date6)->where('created_at', '<=', $date5)->avg('value')  : 'not enough data',
                'average7' => $this->measures->where('created_at', '>=', $date7)->where('created_at', '<=', $date6)->avg('value') ? $this->measures->where('created_at', '>=', $date7)->where('created_at', '<=', $date6)->avg('value')  : 'not enough data'
            ],
            'href' => [
                'measures' => route('measures.index', $this->id)
            ]
        ];
    }
}
