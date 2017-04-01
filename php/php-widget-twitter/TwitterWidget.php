<?php 
/** @name TwitterWidget
    @author Gabriele Romanato
    
    Questa classe accetta due parametri passati al costruttore
    
    1. $username = Il vostro username di Twitter
    2. $limit = Il numero di tweet da visualizzare */
    

class TwitterWidget
{

  protected $_username;
  protected $_limit;
  
  public function __construct($username, $limit)
  {
  
    $this->_username = $username;
    $this->_limit = $limit;
  
  }
  
  /** @param String $text Il testo del tweet
      @returns String $replaced Una stringa con gli URL trasformati in elementi <a> */
  
  protected function _replaceTextURLs($text)
  {
  
    $re = '/(http:\/\/[^\s&]+)/';
	
	$replaced = preg_replace($re, '<a href="$1">$1</a>', $text);
	
	return $replaced;
  
  
  }
  
  /** @param String $time Un timestamp Unix
      @returns String Il tempo trascorso dall'ultimo tweet */
  
  protected function _timeAgo($time)
  {
  
  
   
   $periods = array("secondo", "minuto", "ora", "giorno", "settimana", "mese", "anno", "decennio");
   $lengths = array("60","60","24","7","4.35","12","10");

   $now = time();

       $difference     = $now - $time;
       $tense         = "fa";

   for($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) {
       $difference /= $lengths[$j];
   }
   
   $formattedPeriod = '';
   $periodName = '';

   $difference = round($difference);

   if($difference != 1) {
   
      $periodName = $periods[$j];
      
      switch($periodName) {
      
        case 'secondo':
        case 'minuto':
        case 'giorno':
        case 'anno':
        case 'decennio':
        case 'mese':
        
          $formattedPeriod = preg_replace('/o|e$/', 'i', $periodName);
          break;
          
        case 'ora':
        case 'settimana':
          $formattedPeriod = preg_replace('/a$/', 'e', $periodName);
          break;
          
        default:
          break;
          
        
      
      
      }
      
   }

   return "$difference $formattedPeriod fa";
  
  
  
  }
  
  /** @param Nessuno
      @returns La seguente stringa HTML
      <div class="twitter-widget">
        <div class="tweet">
          <p>Il tweet</p>
          <div class="tweet-time-ago">Il tempo trascorso</div>
          <!--more tweets-->
        </div>
      </div> */
  
    
  public function outputWidget()
  {
  
    $tweets = simplexml_load_file('http://twitter.com/statuses/user_timeline/'. $this->_username . '.rss');
	
	$output = '<div class="twitter-widget">' . "\n";
		
	$i = -1;
	
	$tweetNo = $this->_limit - 1;
	
	do {
	
	  $i++;
	
	  $tweet = $tweets->channel->item[$i];
	  $text = str_replace($this->_username . ':', '', $tweet->title);
	  $text = $this->_replaceTextURLs($text);
	  $time = strtotime($tweet->pubDate);
	
	  $output .= '<div class="tweet">' . "\n". '<p>' . $text . '</p>' . "\n" .
	               '<div class="tweet-time-ago">' . $this->_timeAgo($time) . '</div>' . "\n" . '</div>' . "\n";
	
	} while($i < $tweetNo);
	
	$output .= '</div>' . "\n";
	
	return $output;
  
  
  }


}








?>