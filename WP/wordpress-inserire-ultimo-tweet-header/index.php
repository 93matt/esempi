<!DOCTYPE html>
<html>
<head>
<title>WordPress: inserire l'ultimo tweet nell'header</title>
<meta charset="utf-8" />
<style type="text/css">
body {
	margin: 0;
	padding: 0;
	font: 100%/1 Arial, sans-serif;
}

#header {
	height: 6em;
	background: #222;
	color: #fff;
	border-top: 0.5em solid #bbb;
}

#header h1 {
	margin: 0;
	font: normal 3em Georgia, serif;
}

#header h1 a {
	color: #bbb;
	text-decoration: none;
}

#branding {
	float: left;
	width: 50%;
	padding: 0.5em 1em 1em 1em;
}

#description {
	margin: 0;
	font: italic 1.5em "Times New Roman", Times, serif;
	padding-top: 5px;
}

#latest-tweet {
	float: right;
	width: 30%;
	padding: 1em 1em 1em 90px;
	background: url(twitter.png) no-repeat 0 50%;
}

#tweet {
	line-height: 1.4;
	font-size: 90%;
}

#tweet a {
	color: #f96;
}

#tweet-time {
	font-style: italic;
	font-size: 85%;
	padding-top: 5px;
}
</style>
</head>

<body>

<?php
function get_latest_tweet($twitter_user = 'gabromanato') {
	$html = '';
	$html .= '<div id="latest-tweet">';
	$url = "http://twitter.com/statuses/user_timeline/$twitter_user.xml?count=1";
	
	if(file_get_contents($url)) {
	
		$xml = new SimpleXMLElement(file_get_contents($url));
		$status = $xml->status->text;
		$time = nice_time(strtotime($xml->status->created_at));
		$tweet = preg_replace('/http:\/\/(.*?)\/[^ ]*/', '<a href="\\0">\\0</a>', $status);
	
	
		$html .= '<div id="tweet">' . $tweet . '</div>';
		$html .= '<div id="tweet-time">' . $time . '</div>';
	} else {
	
		$html .= '<div id="tweet">Twitter non risponde.</div>';
	
	}
	
	$html .= '</div>';
	
	return $html;
	
}

function nice_time($time) {
  $delta = time() - $time;
  if ($delta < 60) {
    return 'meno di 1 minuto fa.';
  } else if ($delta < 120) {
    return 'circa 1 minuto fa.';
  } else if ($delta < (45 * 60)) {
    return floor($delta / 60) . ' minuti fa.';
  } else if ($delta < (90 * 60)) {
    return 'circa 1 ora fa.';
  } else if ($delta < (24 * 60 * 60)) {
    return 'circa ' . floor($delta / 3600) . ' ore fa.';
  } else if ($delta < (48 * 60 * 60)) {
    return '1 giorno fa.';
  } else {
    return floor($delta / 86400) . ' giorni fa.';
  }
}
?>

<div id="header">

	<div id="branding">
	
		<h1><a href="#">Nome Sito</a></h1>
		<p id="description">Descrizione sito</p>
	
	</div>
	
	<?php echo get_latest_tweet(); ?>

</div>
</body>
</html>