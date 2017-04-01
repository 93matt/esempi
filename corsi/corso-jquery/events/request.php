<?php
header('Content-Type: application/json');
$data = array();

if(isset($_POST['data'])) {

	if(ctype_alnum($_POST['data']) && strlen($_POST['data']) <= 13) {
	
		$data['id'] = sha1(uniqid() . $_POST['data']);
		
		echo json_encode($data);
		
		exit();
	
	} else {
	
		$data['error'] = 'Not valid data';
		
		echo json_encode($data);
		
		exit();
	
	}

} else {

	exit();	

}