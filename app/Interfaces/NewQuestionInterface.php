<?php

/**
 * Created by PhpStorm.
 * User: StubbornGrass
 * Date: 2018/06/19
 * Time: 10:18
 */

namespace App\Interfaces;

use Illuminate\Http\Request;

interface NewQuestionInterface
{
    public function index(Request $request);

    public function store(Request $request);

    public function  destroy(Request $request,$id);

}
