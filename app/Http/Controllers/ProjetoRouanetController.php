<?php

namespace App\Http\Controllers;

use App\Models\ProjetoRouanet;
use Illuminate\Http\Request;

class ProjetoRouanetController extends Controller
{
    public function index()
    {
        $projetos = ProjetoRouanet::all();
        return response()->json($projetos);
    }
}
