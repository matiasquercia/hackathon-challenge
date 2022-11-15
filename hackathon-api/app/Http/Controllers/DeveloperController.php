<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Developer;
use DB;


class DeveloperController extends Controller
{

 public function index(){
     return Developer::paginate();
 }

 public function find($id){
     return Developer::where('id_hackathon', $id)->get();
 }

 public function orderByRanking() {
  return Developer::orderBy('ranking', 'ASC')->get();
 }

}
