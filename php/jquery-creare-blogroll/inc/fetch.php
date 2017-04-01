<?php
function fetchRSS($url) {

$feed = @simplexml_load_file($url);

 if(!$feed) {
 
 	echo '<p>Oops, feed non disponibile...</p>' . "\n";
 
 } else { 

 $html = '<ul>' . "\n";
    
    
    $i = -1;
    $items = $feed->channel->item;
    
    do {
    
      $i++;
      
      $title = $items[$i]->title;
      $links = $items[$i]->children('http://rssnamespace.org/feedburner/ext/1.0');
      $link = $links->origLink;
      $html .= '<li><a href="' . $link . '">' . $title . '</a></li>' . "\n";
      
    
      
      
      
    
    } while($i < 10);


  $html .= '</ul>' . "\n";
  
  echo $html;
}

}
?>

