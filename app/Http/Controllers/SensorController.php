<?php

namespace App\Http\Controllers;

use App\Http\Resources\Sensor\SensorResource;
use App\Http\Requests\SensorRequest;
use App\Http\Resources\Sensor\SensorCollection;
use App\Model\Sensor;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SensorController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api')->except('index', 'show');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SensorCollection::collection(Sensor::paginate(20));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SensorRequest $request)
    {
        $sensor = new Sensor;

        $sensor->name = $request->name; 
        $sensor->type = $request->type; 
        $sensor->unit = $request->unit; 
        $sensor->room = $request->room; 

        $sensor->save();

        return response([
            'data' => new SensorResource($sensor)
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Sensor  $sensor
     * @return \Illuminate\Http\Response
     */
    public function show(Sensor $sensor)
    {
        return new SensorResource($sensor);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Sensor  $sensor
     * @return \Illuminate\Http\Response
     */
    public function edit(Sensor $sensor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Sensor  $sensor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sensor $sensor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Sensor  $sensor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sensor $sensor)
    {
        //
    }
}
