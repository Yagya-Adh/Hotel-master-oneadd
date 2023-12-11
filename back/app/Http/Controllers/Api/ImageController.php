<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $image = Image::get();
        return response([
            'image' => $image
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
            'price' => 'required',
        ]);
        $image = new Image();
        $image->image = $request->image;
        $image->name = $request->name;
        $image->price = $request->price;

        $image->save();
        return response([
            'image' => $image,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Image::find($id);
        return response(['image' => $image], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
            'price' => 'required',
        ]);

        $image = Image::find($id);

        $image->image = $request->image;
        $image->name = $request->name;
        $image->price = $request->price;

        $image->save();

        return response([
            'image' => $image,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Image::destroy($id);
        return response([], 202);
    }
}
