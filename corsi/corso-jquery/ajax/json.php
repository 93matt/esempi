<?php
header('Content-Type: application/json');
$request = strtolower($_REQUEST['word']);

if(!ctype_alpha($request)) {

	$error = array('error' => 'Not a valid word');
	echo json_encode($error);
	
	exit();

}

$words = array(
            'css' => 'A stylesheet language',
            'dom' => 'A document model interface',
            'xml' => 'A structured markup language',
            'javascript' => 'A client-side web programming language'
         );
         
if(array_key_exists($request, $words)) {

	$output = array('definition' => $words[$request]);
	
	echo json_encode($output);

}
?>