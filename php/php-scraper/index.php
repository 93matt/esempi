<!DOCTYPE html>
<html>
<head>
<title>PHP: creare uno scraper</title>
<meta charset="utf-8" />
</head>

<body>

<h1>Ultimi post su Html.it</h1>

<?php
$page = file_get_contents('http://blog.html.it/author/gabroman/');
preg_match_all('#<a href="http://blog.html.it/\d+/\d+/\d+/.+/" title="URL permanente di questo post">.+</a>#', $page, $matches);
$links = array_slice($matches[0], 0, 5);
$html = '<ul>' . "\n";
foreach($links as $link) {
  
  $html .= '<li>' . $link . '</li>' . "\n";


}
$html .= '</ul>' . "\n";
echo $html;
?>

</body>
</html>