<?php
require_once('inc/fetch.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>jQuery: creare un blogroll</title>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="style.css" />	
</head>
<body>
	
	<div id="blogSliderWrap">
		<div id="blogSlider">
			<div class="innerWrap">
				<div class="panelContainer">
					
					<div class="panel" title="onwebdev">
						<div class="wrapper onwebdev">
					
							<?php fetchRSS('http://feeds.feedburner.com/blogspot/onwebdev/');?>	
					
						</div>
					</div>
	
					<div class="panel" title="onwebdev examples">
						<div class="wrapper examples">
						
							<?php fetchRSS('http://feeds.feedburner.com/onwebdevexamples/');?>	
													
						</div>
					</div>
				
					
				</div>
			</div>
		</div>
		
		<div id="push"></div>
	</div>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery-easing.js" type="text/javascript"></script>
	<script src="js/jquery-easing-compatibility.js" type="text/javascript"></script>
	<script src="js/coda-slider.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(function () {
			$('#blogSlider').codaSlider();
		});
	</script>


</body>
</html>