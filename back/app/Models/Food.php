<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Food extends Model
{
    use HasFactory, SoftDeletes, Notifiable, HasFactory;



    /* 
    SoftDelete is a trait under which we can access different methods 
    like restore, forecDelete,softdelete .. soon
    */
    protected $fillable = [
        'name',
        'price',
        'description',
        'slug',
    ];


    public function image()
    {
        return $this->hasOne(Image::class);
    }
}
