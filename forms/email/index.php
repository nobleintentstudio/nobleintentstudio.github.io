<?php

//new member

//libs
include('../httpful.phar'); //for making restful calls
include('../mc-variables.php'); //for making restful calls

$email = $_POST['email'];

if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && empty($honeypot)){
  $response = \Httpful\Request::post($mc_list.'members')
    ->sendsJson()
    ->authenticateWith('apikey', $mc_api_key)
    ->body('{"email_address": "'.$email.'","status": "pending"}')
    ->send();

  echo $response;
} else {
  echo '{"type":"","title":"Invalid Email","status":401,"detail":"'.$email.' does not look like a valid email address, please submit a valid email address.","instance":""}';
}


?>