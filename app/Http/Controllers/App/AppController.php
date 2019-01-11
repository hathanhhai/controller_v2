<?php

namespace App\Http\Controllers\App;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    //
    public function index(){
        return view('dashboard');
    }

    public function _actionPostRegister(){

        $user =  new User();
        $user->username = "phuongdung";
        $user->setting_id = "5";
        $user->type = "admin";
        $user->password = bcrypt('123456');
        $user->password_cover = Crypt::encrypt('123456');
        $user->role = [];
        $user->area = 'A';
        $user->token = csrf_token();
        $user->save();
        return $this->checkResponse($user);
    }

   public function _actionPostTest(){
        return 34;
   }



}
