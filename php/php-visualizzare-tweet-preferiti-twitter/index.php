<?php
require_once('inc/FavoriteTweets.php');
$favoriteTweets = new FavoriteTweets('gabromanato');
?>
<!DOCTYPE html>
<html>
<head>
<title>PHP: visualizzare i tweet preferiti da Twitter</title>
<meta charset="utf-8" />
<style type="text/css" media="screen">
body {
	background: #e4e4e4;
	padding: 2em 0;
}

#favorite-tweets {
	width: 30em;
	margin: 0 auto;
	padding: 90px 0.5em 0.5em 0.5em;
	background: #fff url(img/twitter.png) no-repeat 50% 0;
	border: 1px solid #ccc;
	font: 1.5em Arial, sans-serif;
}

#favorite-tweets ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#favorite-tweets li p {
	font-family: Palatino, Georgia, serif;
	line-height: 1.3;
	margin-bottom: 6px;
}

#favorite-tweets li p a {
	color: #c30;
}

#favorite-tweets div.info {
	font-size: 0.85em;
	padding-bottom: 0.4em;
	border-bottom: 1px solid #ccc;
}

#favorite-tweets div.info a {
	color: #333;
	text-decoration: none;
	margin-right: 0.5em;
}

#favorite-tweets div.info a:hover {
	border-bottom: 1px dashed;
	color: #545454;
}

#favorite-tweets div.info span {
	font-weight: bold;
	margin-right: 0.5em;
}
	


</style>
</head>

<body>

<div id="favorite-tweets">
<?php $favoriteTweets->generate(5);?>
</div>

</body>
</html>