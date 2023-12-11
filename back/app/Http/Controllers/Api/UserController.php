<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::query()->orderBy('id')->paginate(10);
        // $user = User::get();
        return response(['user' => $user], 201);
        // return UserResource::collection(User::query()->orderBy('id', 'desc')->paginate(10));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validate();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        return response(new UserResource($user), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);
        return response(['user' => $user], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $user->update($data);

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::destroy($id);

        return response('', 202);
    }


    /*  SoftDelete  */
    /* we get all records of user including deleted users  */
    public function userrecordwithTrash()
    {
        $user = User::withTrashed()->get();
        return response(['user' => $user], 200);
    }

    /* restore all delete users */
    public function restoreAlldelete()
    {
        $user = User::withTrashed()->restore();
        return response(['user' => $user], 200);
    }


    /* we get all only trashed users  */
    public function onlyTrashusers()
    {
        $user = User::onlyTrashed()->get();
        return response(['user' => $user], 200);
    }

    /* restore only these user Id */
    public function restoreonlyTrashusers($id)
    {
        $user = User::onlyTrashed()->whereId($id)->restore();
        return response(['user' => $user], 200);
    }

    /* permanent delete */
    public function forceDel($id)
    {
        User::where('id', $id)->first()->forceDelete();
        $user = User::withTrashed()->get();
        return response(['user' => $user], 200);
    }



    /* search by name or, email */

    /*   public function search(string $name, string $email)
    {
        // $user = User::where('name', 'LIKE', '%' . $name . '%')
        //     ->orwhere('email', 'LIKE', '%' . $email . '%')
        //     ->get();
        // return response($user, 201);


        return User::where('name', 'LIKE', '%' . $name . '%')
            ->orwhere('email', 'LIKE', '%' . $email . '%')
            ->get();
    } */


    /* Search by name */
    public function search(string $name)
    {
        return User::where('name', 'LIKE', '%' . $name . '%')
            ->get();
    }


    /* email verify */


    public function sendVerifyMail($email)
    {
        if (auth()->user()) {
        } else {

            return response()->json(['success' => false, 'msg' => 'User is not Authenticated'],  201);
        }
    }
}
