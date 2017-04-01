<?php
header('Content-Type: text/plain');
$string = $_GET['str'];
$encoding = $_GET['encoding'];

switch($encoding) {
	case 'md5':
		echo md5($string);
		break;
	case 'sha1':
		echo sha1($string);
		break;
	default:
		echo 'Not a valid choice';
		break;
}
?>