<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;

    class LoginController extends Controller {
        public function logining( Request $request ) {
            $isUser = DB::select( 'select login from users where login = ?', [$request -> login] );

            if ( count( $isUser ) == 0 ) {
                return response() -> json([ 'value' => false, 'message' => 'Такого користувача не існує' ]);
            } else {
                $checkPassword = DB::select( 'select password from users where login = ?', [$request -> login] );
                if ( Hash::check( $request -> password, $checkPassword[0] -> password ) ) {
                    return response() -> json([ 'value' => true, 'message' => '' ]);
                } else {
                    return response() -> json([ 'value' => false, 'message' => 'Невірний пароль' ]);
                }
                
            }
        }
    }

?>