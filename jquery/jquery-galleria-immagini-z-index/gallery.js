var Gallery = new function() {

	var gallery = document.getElementById('gallery'),
		images = $('img', gallery),
		prev = $('a', document.getElementById('prev')),
		next = $('a', document.getElementById('next')),
		index = 0,
		animated = false;
		
	var prepare = function() {
	
		images.each(function() {
		
			index++;
			
			$(this).css('zIndex', index);
		
		
		});
	
	
	};
	
	var change = function(first) {
	
		if(animated) {
		
			return;
		
		} else {
		
			animated = true;
		
		}
		
		var processZindex, direction, newZindex, inDeCrease;
		
		if(first) {
		 
			processZindex = index; 
			direction = '-'; 
			newZindex = 1; 
			inDeCrease = 1;
			 
		} else { 
		
    		processZindex = 1; 
    		direction = ''; 
    		newZindex = index; 
    		inDeCrease = -1; 
    	}
    	
    	images.each(function() { 
    	
      		if($(this).css('z-index') == processZindex) {
        		$(this).animate({ 'top' : direction + $(this).height() + 'px' }, 'slow', function() {           
        			$(this).css('z-index', newZindex) 
            		.animate({ 'top' : '0' }, 'slow', function() {
              		animated = false; 
            		});
        		});
      		} else {        
      			$(this).animate({ 'top' : '0' }, 'slow', function() {           
      				$(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease);
        	});
      		}
    	});

		return false;
	
	};
	
	this.init = function() {
	
		prepare();
	
		next.click(function() {
		
			return change(true);
		
		});
		
		prev.click(function() {
		
			return change(false);
		
		});
	
	
	};


}();

$(function() {

	Gallery.init();


});