<!DOCTYPE html>
<html>
<head>
<title>PHP: visualizzare i video di YouTube</title>
<meta charset="utf-8" />
<style type="text/css">
body {
	background: #ddd;
	padding: 2em 0;
}

#youtube {
	width: 980px;
	height: 300px;
	margin: 2em auto;
}

div.video {
	float: left;
	width: 310px;
	height: 250px;
	margin-right: 10px;
}

iframe {
	display: block;
	width: 100%;
	height: 100%;
}
</style>
</head>

<body>

<?php

	function fetchYouTubeVideos($username='gabrieleromanato', $limit=3)
	{
	
		$feedURL = 'http://gdata.youtube.com/feeds/base/users/' . $username . '/uploads?alt=rss&v=2&orderby=published&client=ytapi-youtube-profile';
		$html = '<div id="youtube">' . "\n";
		
		if(file_get_contents($feedURL)) {
		
			$feed = simplexml_load_file($feedURL);
			$items = $feed->channel->item;
			$index = -1;
			$length = $limit - 1;
			
			do {
			
				$index++;
				
				$html .= '<div class="video">' . "\n";
				$link = $items[$index]->link;
				$iframeLink = str_replace('watch?v=', 'embed/', $link);
				$iframeLink = preg_replace('/&.+/', '', $iframeLink);
				
				$html .= '<iframe src="' . $iframeLink . '?rel=0" width="560" height="315" frameborder="0" allowfullscreen></iframe>';
				
				$html .= '</div>' . "\n";
				
			
			
			}while($index < $length);
			
			
			$html .= '</div>';
			
			return $html;
			
				
		
		} else {
		
			$html .= '<p>Errore nel caricamento.</p>' . "\n";
			$html .= '</div>';
			
			return $html;
		
		}
	
	
	}

    echo fetchYouTubeVideos();
?>
</body>
</html>