<?php
class FavoriteTweets
{
	
	private $username;
	
	
	
	public function __construct($username)
	{
		$this->username = $username;
	}
	
	
	private function _getTweets()
	
	{
		
		$tweets = array();
		
		
		$tweets = json_decode($this->_fetchFeed());
		
		if(!$tweets){
			$tweets = array();
		}
		
		return $tweets;
	}
	
	
	
	public function generate ($limit=10, $className = 'tweet-fav-list')
	
	{

		echo "<ul class='$className'>";

	
		$tweets = array_slice($this->_getTweets(),0,$limit);

		foreach($tweets as $t){

			$id			= $t->id_str;
			$text		= self::_formatTweet($t->text);
			$time		= self::_relativeTime($t->created_at);
			$username	= $t->user->screen_name;
			$retweets	= $t->retweet_count;
			
			?>
			
			<li>
				<p><?php echo $text ?></p>
				<div class="info">
					<a href="http://twitter.com/<?php echo $username ?>" class="user"
						title="Go to <?php echo $username?>'s twitter page"><?php echo $username ?></a>
						
					<?php if($retweets > 0):?>
						<span class="retweet" title="Retweet Count"><?php echo $retweets ?></span>
					<?php endif;?>

					<a href="http://twitter.com/<?php echo $username,'/status/',$id?>"
                    	class="date" title="Shared <?php echo $time?>"><?php echo $time?></a>
				</div>
                
              
                
            </li>
            
            <?php
		}
		
		echo "</ul>";
	}
	
	
	private function _fetchFeed()
	
	{
		return file_get_contents("http://api.twitter.com/1/favorites/{$this->username}.json");
	}
	
	private static function _relativeTime($time)
	
	{
	
		$divisions	= array(1,60,60,24,7,4.34,12);
		$names		= array('second','minute','hour','day','week','month','year');
		$time		= time() - strtotime($time);
		
		$name = "";
		
		if($time < 10){
			return "just now";
		}
		
		for($i=0; $i<count($divisions); $i++){
			if($time < $divisions[$i]) break;
			
			$time = $time/$divisions[$i];
			$name = $names[$i];
		}
		
		$time = round($time);
		
		if($time != 1){
			$name.= 's';
		}
	
		return "$time $name ago";
	}
	
	
	private static function _formatTweet($str)
	
	{
		
	
		
		$str = preg_replace(
			'/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/i',
			'<a class="link" href="$1" target="_blank">$1</a>',
			$str
		);

		$str = preg_replace(
			'/(\s|^)@([\w\-]+)/',
			'$1<a class="mention" href="http://twitter.com/#!/$2" target="_blank">@$2</a>',
			$str
		);

		$str = preg_replace(
			'/(\s|^)#([\w\-]+)/',
			'$1<a class="hash" href="http://twitter.com/search?q=%23$2" target="_blank">#$2</a>',
			$str
		);
		
		return $str;
	}
}





