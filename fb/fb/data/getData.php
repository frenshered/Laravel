<?php 

    function getData($file) {
        $response = file_get_contents(__DIR__ . '../../data/' . $file); 
        $data = json_decode($response, true);
        return $data;
    }

?>