<?php

namespace App\Models;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class StopUsingController extends Model
{
    use HasFactory;



    public function index()
    {
        echo "do not use controller form here now!";
    }


    public function getData($name)
    {
        echo "<h1>  My name is  $name  </h1>";
        echo "$name";
        echo "Hello";
    }
}
