var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		wrapper = $('#slideshow-wrapper', slideshow),
		slides = $('div.slide', wrapper),
		pieces = $('div.piece', slides),
		index = -1,
		timer = null;
		
		
	var insertBlocks = function() {
	
		slides.each(function() {
			
			var slide = $(this);
			
			$('<div class="overlay"/>').appendTo(slide);
			
			var block = '<div class="row">' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'<div class="piece"></div>' +
						'</div>';
			for(var i = 0; i < 4; i += 1) {
			
				$(block).appendTo($('div.overlay', slide));
			
			}
		
		});
	
	
	};
	
	
	var setBackgroundImages = function() {
	
	     
	
		slides.each(function() {
		
			var slide = $(this);
			var src = $('img', slide).attr('src');
			var pieces = $('div.piece', slide);
			pieces.css('backgroundImage', 'url(' + src + ')');
			
			pieces.eq(0).css('backgroundPosition', '0px 0px');
			pieces.eq(1).css('backgroundPosition', '-115px 0px');
			pieces.eq(2).css('backgroundPosition', '-230px 0px');
			pieces.eq(3).css('backgroundPosition', '-345px 0px');
			pieces.eq(4).css('backgroundPosition', '-460px 0px');
			pieces.eq(5).css('backgroundPosition', '-575px 0px');
			pieces.eq(6).css('backgroundPosition', '-690px 0px');
			pieces.eq(7).css('backgroundPosition', '-805px 0px');
			pieces.eq(8).css('backgroundPosition', '-925px 0px');
			pieces.eq(9).css('backgroundPosition', '-1040px 0px');
			
			pieces.eq(10).css('backgroundPosition', '0px -100px');
			pieces.eq(11).css('backgroundPosition', '-115px -100px');
			pieces.eq(12).css('backgroundPosition', '-230px -100px');
			pieces.eq(13).css('backgroundPosition', '-345px -100px');
			pieces.eq(14).css('backgroundPosition', '-460px -100px');
			pieces.eq(15).css('backgroundPosition', '-575px -100px');
			pieces.eq(16).css('backgroundPosition', '-690px -100px');
			pieces.eq(17).css('backgroundPosition', '-805px -100px');
			pieces.eq(18).css('backgroundPosition', '-925px -100px');
			pieces.eq(19).css('backgroundPosition', '-1040px -100px');
			
			pieces.eq(20).css('backgroundPosition', '0px -200px');
			pieces.eq(21).css('backgroundPosition', '-115px -200px');
			pieces.eq(22).css('backgroundPosition', '-230px -200px');
			pieces.eq(23).css('backgroundPosition', '-345px -200px');
			pieces.eq(24).css('backgroundPosition', '-460px -200px');
			pieces.eq(25).css('backgroundPosition', '-575px -200px');
			pieces.eq(26).css('backgroundPosition', '-690px -200px');
			pieces.eq(27).css('backgroundPosition', '-805px -200px');
			pieces.eq(28).css('backgroundPosition', '-925px -200px');
			pieces.eq(29).css('backgroundPosition', '-1040px -200px');
			
			pieces.eq(30).css('backgroundPosition', '0px -300px');
			pieces.eq(31).css('backgroundPosition', '-115px -300px');
			pieces.eq(32).css('backgroundPosition', '-230px -300px');
			pieces.eq(33).css('backgroundPosition', '-345px -300px');
			pieces.eq(34).css('backgroundPosition', '-460px -300px');
			pieces.eq(35).css('backgroundPosition', '-575px -300px');
			pieces.eq(36).css('backgroundPosition', '-690px -300px');
			pieces.eq(37).css('backgroundPosition', '-805px -300px');
			pieces.eq(38).css('backgroundPosition', '-925px -300px');
			pieces.eq(39).css('backgroundPosition', '-1040px -300px');


			
			
					
		
		});
	
	
	};
	
	var autoSlide = function() {
	    
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (slides.length - 1)) {
			
				index = -1;
			
			}
			
			
			wrapper.animate({
				left: - slides.eq(index).position().left
			}, 0, function() {
			
				var slide = slides.eq(index);
				var parts = $('div.piece', slide);
				var counter = -1;
				var slicer = null;
				
				slicer = setInterval(function() {
				
					counter++;
					
					if(counter == (parts.length)) {
					
						clearInterval(slicer);
						
						parts.fadeOut();
					
					}
					
					parts.eq(counter).fadeIn(75);
				
				
				}, 75); 
				
			
			
			});
		
		
		
		}, 3000);
	
	
	
	};
	
	this.init = function() {
	
		insertBlocks();
		setBackgroundImages();
		autoSlide();
	
	};


}();

$(function() {

	Slideshow.init();

});