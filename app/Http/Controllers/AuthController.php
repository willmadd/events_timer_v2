<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\User;
use App\Notifications\SignupActivate;
use Illuminate\Support\Str;
use App\Models\RecentVideos;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
// use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'name' => 'string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'company' => $request->company,
            'email' => $request->email,
            'membership_level' => 'free',
            'password' => Hash::make($request->password),
            'activation_token' => Str::random(60)

        ]);
        $user->save();

        $user->notify(new SignupActivate($user));

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }
  
    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;

        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
  
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
  
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {

        $subscription=DB::table('subscriptions')->select('stripe_plan', 'ends_at')->where('user_id', $request->user()->id)->first();
//  return $subscription->stripe_plan;
//  return response()->json($subscription->stripe_plan);
        $userObj = $request->user();
        
        if($subscription && $subscription->stripe_plan && !$subscription->ends_at){
            $plan_name = DB::table('plans')->where('stripe_plan', $subscription->stripe_plan)->value('name');
            $userObj->subscription = $plan_name;
            $userObj->membership_level = $plan_name;
        } else{
            $userObj->subscription = "Free";
            $userObj->membership_level = "Free";
        }

        return response()->json($userObj);
    }

    public function signupActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        return $user;
    }

    public function recentVideos(Request $request)
    {
        $ids = RecentVideos::select(['thumbnail', 'background', 'created_at', 'duration', 'font', 'font_color'])->where('user_id',auth()->user()->id)->get();

        return response()->json(
            [
                'videos'=>$ids,
            ],
                200
            );
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'password' => 'string|required',
            'newPassword'=>'string|required'
        ]);

    if(!Hash::check($request->password, Auth::guard('api')->user()->password)){
        return response()->json(
            [
                'message'=>'Your password is incorrect',
            ],
                401
            );
    }else{
        $user = Auth::user();
        $user->password = Hash::make($request->newPassword);
        $user->save();
        return response()->json(
            [
                'message'=>'success',
                'user'=>$user
            ],
                200
            );
        }

    }
}

