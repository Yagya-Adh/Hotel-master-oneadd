<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FoodRequest;
use App\Models\Food;
use App\Models\Image;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // $food = Food::all();
        // $food = Food::get();
        // $food = Food::query()->orderBy('id', 'desc')->paginate(10);
        // $food = Image::first();

        $food = Food::with(['image'])->paginate(12);
        // $food = Food::with(['image'])->get();
        return response(['food' => $food], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FoodRequest $request)
    {

        $food = new Food();
        $food->name = $request->name;
        $food->price = $request->price;
        $food->description = $request->description;
        $food->slug = $request->slug;
        $food->save();
        return response(
            [
                'food' => $food,
                'message' => 'success created'
            ],
            201
        );


        // $food = Food::create($request->all());
        // return response([
        //     'food' => $food,
        //     'message' => 'successfully created'
        // ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $food = Food::find($id);

        return response([
            'food' => $food,
            'message' => 'Food you chooose is here.'
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FoodRequest $request, string $id)
    {
        $food =  Food::find($id);

        $food->name = $request->name;
        $food->price = $request->price;
        $food->description = $request->description;
        $food->slug = $request->slug;

        $food->save();

        return response(
            [
                'food' => $food,
                'message' => 'success created'
            ],
            201
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Food::destroy($id);
        return response('', 202);
    }

    /*get records of  temporaryly  deleted food  from list */
    public function softDel()
    {
        // temporary delete
        // $food = Food::withTrashed()->get();
        Food::first()->delete();
        $food = Food::onlyTrashed()->get();
        return response(['food' => $food], 200);
    }

    /* to restore deleted foods to record which are temperoryly deleted */
    public function restoreDelete()
    {
        Food::onlyTrashed()->restore();
        $food = Food::withTrashed()->get(); //see the records remain from trash
        return response(['food' => $food], 200);
    }



    public function permanentDel($id)
    {
        // $food = Food::first()->forceDeleted(); or,
        Food::where($id)->first()->forceDeleted(); //force del
        $food = Food::withTrashed()->get(); //see the records remain from trash
        return response(['food' => $food], 200);
    }
}
