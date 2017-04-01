var Slideshow = new function() {

	var wrapper = $('#slideshow-wrapper', document.getElementById('slideshow')),
		images = $('img', wrapper),
		caption = $('#caption', wrapper),
		index = -1,
		timer = null;
		
	var showImage = function(i) {
	
		var image = images.eq(i);
		var text = image.attr('alt');
		
		images.hide();
		caption.hide();
		
		switch(i) {
		
			case 0:
			
			
			
			image.effect('explode',
						  {
						    mode: 'show',
						    pieces: 4
						  }, 1000, function() {
			caption.text(text).fadeIn(1000);
			
			
			});
			
			break;
			
			case 1:
			
			
			
			image.effect('drop',
						  {
						    mode: 'show',
						    direction: 'bottom'
						  }, 1000, function() {
			caption.text(text).fadeIn(1000);
			
			});
			
			break;
			
			
			case 2:
			
			
			
			image.effect('clip',
						  {
						    mode: 'show',
						    direction: 'vertical'
						  }, 1000, function() {
							caption.text(text).fadeIn(1000);
						 });
			
			break;
			
			
			case 3:
			
			
			
			image.effect('blind',
						  {
						    mode: 'show',
						    direction: 'vertical'
						  }, 1000, function() {
			caption.text(text).fadeIn(1000);
			
			});
			
			break;

		    
		
		
		}
	
	
	};
	
	var slide = function() {
	
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == images.length) {
			
				index = -1;
			
			}
			
			showImage(index);
		
		}, 2000);
	
	
	};
	
	this.init = function() {
	
		slide();
	
	};


}();

$(function() {

	Slideshow.init();

});