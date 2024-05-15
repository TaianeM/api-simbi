<?php

namespace App\Http\Controllers;

use App\Models\ProjetoRouanet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjetoRouanetController extends Controller
{
    public function index()
    {
        $projetos = ProjetoRouanet::all();
        return response()->json($projetos);
    }

    public function list()
    {
        return view('projetos.index');
    }
}
