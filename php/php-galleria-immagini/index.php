<!DOCTYPE html>
<html>
<head>
<title>PHP: galleria di immagini</title>
<meta charset="utf-8" />
<style type="text/css">

#gallery {
	width: 60%;
	margin: 2em auto;
}

#gallery img {
	width: 20%;
	float: left;
	margin-right: 5%;
}


</style>
</head>
<body>

<div id="gallery">

<?php
  
  $dir = opendir('img');
  $images = array();
  $html = '';
  
  while($fname = readdir($dir)) {
     
     if(preg_match('/[.]jpg$/', $fname)) {
         
         $images[] = $fname;
         
     }
     
     
     
 }  
 
 closedir($dir);
 
 function imgSort($a, $b)
 {
     $a1 = str_replace('.jpg', '', $a);
     $a2 = str_replace('.jpg', '', $b);
     
     return $a1 > $a2;
     
 }
 
 usort($images, 'imgSort');
 


 
 foreach($images as $img) {
     
     $html .= '<img src="img/' . $img . '" alt="" />' . "\n";
     
 }
 
 
 
 echo $html;
  
?>
</div>
</body>
</html>
