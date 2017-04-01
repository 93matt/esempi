<?php 
require_once('TwitterWidget.php');
$twitterWidget = new TwitterWidget('gabromanato', 5);
?>

<!DOCTYPE html>
<html>
<head>
<title>PHP: un widget per Twitter</title>
<meta charset="utf-8" />
<style type="text/css">

body {
	margin: 0;
	padding: 2em 0;
	font: 76% Arial, sans-serif;
}

p {
	margin: 0;
	line-height: 1.4;
}

div.twitter-widget {
	margin: 0 auto;
	width: 30%;
	font-size: 1.2em;
}

div.twitter-widget div.tweet {
	background: #f7f7f7;
	border-left: 1em solid #d34545;
	margin-bottom: 1em;
}

div.twitter-widget p {
	padding: 1em;
}

div.twitter-widget div.tweet-time-ago {
	background: #333;
	color: #fff;
	padding: 0.5em;
}

div.twitter-widget a {
	color: #d34545;
}	

</style>
</head>

<body>

<?php 
echo $twitterWidget->outputWidget();
?>

</body>
</html>