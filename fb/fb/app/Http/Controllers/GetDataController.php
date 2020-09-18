<?php 

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    class GetDataController extends Controller
    {
        public function getData(Request $request) 
        {
            include __DIR__.'\..\..\..\data\getData.php';

            $data = getData($request -> file);
            return response() -> json( $data );
        }
    }
    
?>