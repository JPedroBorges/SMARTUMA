<?php

namespace App\Http\Controllers;

use App\Http\Resources\MeasureReasource;
use App\Http\Requests\MeasuresRequest;
use App\Model\Sensor;
use App\Model\Measure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MeasureController extends Controller
{

    public function __construct(){
        $this->middleware('auth:api')->except('index', 'show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Sensor $sensor)
    {
        return MeasureReasource::collection($sensor->measures);
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
    public function store(MeasuresRequest $request, Sensor $sensor)
    {
        $measure = new Measure;

        $measure->value = $request->value; 
        $measure->unit = $request->unit; 

        $sensor->measures()->save($measure);

        return response([
            'data' => new MeasureReasource($measure)
        ],Response::HTTP_CREATED);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Measure  $measure
     * @return \Illuminate\Http\Response
     */
    public function show(Measure $measure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Measure  $measure
     * @return \Illuminate\Http\Response
     */
    public function edit(Measure $measure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Measure  $measure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Measure $measure)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Measure  $measure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Measure $measure)
    {
        //
    }
}
