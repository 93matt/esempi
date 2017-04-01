window.onload = function () {
		var inputs = document.getElementsByTagName("input");
		for (var i=0; i<inputs.length; i++) {
			if(inputs[i].getAttribute("id") == "causale") {
				if(navigator.userAgent.indexOf("Safari") != -1)  {
					inputs[i].style.width = "99.5%";
				} else if(navigator.userAgent.indexOf("Opera") != -1) {
					inputs[i].style.width = "483px";
				}
											   
			}
		}
};
