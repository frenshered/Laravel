<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;

    class RegistrationController extends Controller {
        public function registering( Request $request ) {

            $email = filter_var($request -> email, FILTER_VALIDATE_EMAIL);
            
            if ($email == false) {
                return response() -> json([ 'value' => false, 'message' => 'Некоректний email' ]);
            }

            $isUser = DB::select( 'select login from users where login = ?', [$request -> login] );

            if ( count($isUser) > 0 ) {
                return response() -> json([ 'value' => false, 'message' => 'Некоректний login' ]);
            }

            $hashedPassword = Hash::make( $request -> password );

            $user = new User();

            $user -> login = $request -> login;
            $user -> email = $email;
            $user -> password = $hashedPassword;

            $user -> save();

            return response() -> json([ 'value' => true, 'message' => '' ]);
        }
    }

?>