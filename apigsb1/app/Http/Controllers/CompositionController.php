<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Composant;
use App\Models\Medicament;

class CompositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $medicament = Medicament::find($request->input("id_medicament"));
        $composant = Composant::find($request->input("id_composant"));
        $qte = $request->input("qte");

        $medicament->composants()->save($composant, ['qte_composant'=>$qte]);

        return response()->json($medicament, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, $id2)
    {
        $medicament = Medicament::find($id);
        $medicament->composants()->detach($id2);
        return response()->json($medicament, 200);
    }

    /**
     * Lisplay listing of components NOT contains in the medication
     */
    public function getMissingComp($id){
        $medicament = Medicament::find($id);
        $composants = Composant::all();
        $allreadycomp = $medicament->listComp();
        $compos = [];
        foreach($composants as $composant){
            if(!in_array($composant->id_composant, $allreadycomp)){
                $compos[] = $composant;
            }
        }

        return response()->json($compos, 200);
    }
}
