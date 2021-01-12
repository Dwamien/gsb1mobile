<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redefinition of the login method with generation of api_token
     * if the user is correctly authentified @return user with api_token
     * otherwise, @return $request is sent to the sendFailedLoginResponse method to generate the failure response
     */
    public function login(Request $request){
        $this->validateLogin($request);
        if($this->attemptLogin($request)){
            $user = $this->guard()->user();
            $user->generateToken();
            return response()->json($user, 200);
        }
        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Redefinition of the sendFailedLoginResponse method to personnalize
     * the failure login response
     */
    public function sendFailedLoginResponse(Request $request){
        return response()->json('Login ou mot de passe inconnu', 401);
    }

    /**
     * Redefinition of the logout metho to erase api_token
     */
    public function logout(Request $request){
        $user = Auth::guard('api')->user();
        if($user){
            $user->api_token = null;
            $user->save();
            return response()->json('Utilisateur déconnecté', 200);
        }
        return response()->json('Utilisateur inconnu', 401);
    }
}
