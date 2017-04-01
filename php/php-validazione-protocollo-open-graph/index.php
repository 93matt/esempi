<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>PHP: gestire la validazione del protocollo Open Graph</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php

  $graph = '<meta property="og:title" content="Test"/>';
  $ua = $_SERVER['HTTP_USER_AGENT'];
  
  if(stristr($ua, 'validator') === false) {
  
  	echo $graph;
  
  }
  

?>
</head>
<body>
</body>
</html>