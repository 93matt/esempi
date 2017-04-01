<?php
header('Content-Type: text/html');
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$output = '';
$errors = array();

if($username != 'test') {
	$errors[] = '<div class="error">Username errato</div>';
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$errors[] = '<div class="error">E-mail non valida</div>';
}

if($password != 'test') {

	$errors[] = '<div class="error">Password errata</div>';

}

if(count($errors) > 0) {

	$output = implode('', $errors);

} else {

	$output = '<div class="success">Dati validi</div>';

}


echo $output;
?>