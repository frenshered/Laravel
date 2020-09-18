<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\Message;

    class MessageController extends Controller {
        public function submit( Request $request ) {

            $email = filter_var($request -> email, FILTER_VALIDATE_EMAIL);
            
            if ($email == false) {
                return response() -> json( false );
            }

            $message = new Message();

            $message -> name = $request -> name;
            $message -> email = $email;
            $message -> message = $request -> message;

            $message -> save();

            return response() -> json( true );
        }
    }

?>