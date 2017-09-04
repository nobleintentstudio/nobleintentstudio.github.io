<?php

$name = $_POST['msg-name'];
$email = $_POST['msg-email'];
$message = $_POST['msg-message'];
$page = $_POST['page'];

$ua = $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER['SERVER_ADDR'];

$debug = $ua.' '.$ip;

$to = "jcnoble2@gmail.com,info@kovalent.co";

if(empty($email) || empty($message) || empty($page) || stristr($ua, 'MSIE 6.0')){
  echo 'oops, you are maybe a robot';
  exit;
}

if(filter_var($email, FILTER_VALIDATE_EMAIL)){
  //subject
  $subject = 'Contact form submission from '.$name;
  //message
  $body = 'Name: '.$name.'<br/>';
  $body .='email: '.$email.'<br/>';
  $body .='message: '.$message.'<br/>';
  $body .='from page:'.$page.'<br/><br/>';
  $body .= '<p style="display:none">'.$debug.'</p>';

  // To send HTML mail, the Content-type header must be set
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  // Additional headers
  $headers .= 'From: ss_form@kovalent.co';
  // Mail it
  $sent = mail($to, $subject, $body, $headers);
  if($sent){
    echo 'Thanks!';
  } else {
    echo 'There was an error, please try again';
  }
} else {
  echo 'bye robot';
}

?>