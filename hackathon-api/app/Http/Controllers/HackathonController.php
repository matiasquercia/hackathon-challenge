<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Developer;


class HackathonController extends Controller
{

 public function index(){
     return Hackathon::paginate();
 }

 public function show($id){
     return Hackathon::find($id);
 }

}