(function($) {


	$.fn.slotmachine = function(options) {
	
		var that = this;
		var settings = {
		
			up: $('#up'),
			down: $('#down'),
			wrapper: $('div.product-wrapper', that),
			slides: $('img', that),
			captionSlide: that.next(),
			target: that.parents('#slide').find('div.product-title'),
			speed: 1000,
			shadow: that.parent().find('div.shadow')
		
		};
		
		options = $.extend(settings, options);
		
		var SlotMachine = new function() {
		
		    var current = 0,
		        len = options.slides.length;
		        
		    var setHeight = function() {
		    
		    	var h = 0;
		    	
		    	options.slides.each(function() {
		    	
		    		var height = $(this).height();
		    		
		    		h += height;
		    	
		    	
		    	});
		    
		    	options.wrapper.css('height', h+'px');
		    };
		    
		    var addPosition = function(img) {
		    
		    	img.attr('rel', 'top').siblings().removeAttr('rel');
		    
		    
		    };
		
			var move = function(element) {
			
			    options.shadow.hide();
			
				options.wrapper.animate({
					top: - element.position().top
				}, options.speed, 'easeOutBounce', function() {
				
				    options.shadow.show();
				
					options.captionSlide.text(element.attr('alt'));
					addPosition(element);
					notify();
				
				
				});
				
				
							
			
			};
			
			var notify = function() {
			
			    var img = $('img[rel=top]', 'div.product-left');			   		
			   	var title = img.attr('title');
			   	
			   	
			   		
			   	options.target.text(title);
			   		
			   		
		     };
			
			
			var controls = function() {
			
				options.up.click(function(e) {
				
					current++;
					
					if(current == len) {
					
						current = 0;
					
					}
					
					var slide = options.slides.eq(current);
					
					move(slide);
					
				
					e.preventDefault();
				
				});
				
				options.down.click(function(e) {
				
					current--;
					
					if(current == -1) {
					
						current = 0;
					
					}
					
					var slide = options.slides.eq(current);
					
					move(slide);
					
				
					e.preventDefault();
				
				});
			
			
			};
			
			this.init = function() {
			
			    setHeight();
			
				controls();
			
			
			};
		
		
		
		}();
		
		return that.each(function() {
		
		
			SlotMachine.init();
		
		
		});
	
	
	};



})(jQuery);

$(function() {

	$('#slideshow').slotmachine();

});