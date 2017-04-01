var Slideshow = new function() {

    var wrapper = $('#slides', document.getElementById('slideshow')),
    	slide = $('#slide', wrapper),
    	loader = $('#loader');
    	
        
    var prepare = function() {
    
    	$('div.product-left, div.product-center', wrapper).
    	css('top', '-350px');
    	$('div.product-right', wrapper).css('top', '-350px');
    	$('div.product-title', wrapper).css('bottom', '-80px');
    	$('span.plus', wrapper).hide();
    
    
    };
    
    var insertShadow = function() {
    
    	$('div.product', slide).each(function() {
    	
    		var $div = $(this);
    		
    		$('<div class="shadow"/>').appendTo($div).hide();
    	
    	
    	});
    
    
    };
        
    
    var loader = function() {
    
      setTimeout(function() {
    	$('span', '#loader').animate({
    		width: 940
    	}, 3000, function() {
    	
    		$(this).animate({width: 0}, function() {
    		
    			animate(slide);
    			
    			$('div.shadow', 'div.product').show();
    		
    		});    		
    	
    	});
    	
      }, 1000);
    
    
    };
    
    var animate = function($slide) {
    
    	$('div.product-left', $slide).animate({
    		top: '30px'
    	}, 1000, 'easeInElastic', function() {
    	
    	    
    	    $('div.product-right', $slide).animate({
    	    	top: '30px'
    	    }, 1000, 'easeInElastic', function() {
    	    
    	    	$('div.product-center', $slide).animate({
    	    		top: '30px'
    	    	}, 1000, 'easeInElastic', function() {
    	    	
    	    		$('div.product-title', $slide).animate({
    	    			bottom: '10px'
    	    		}, 1000, 'easeInElastic', function() {
    	    		
    	    			$('span.plus', $slide).show(1000);
    	    		
    	    		});
    	    	
    	    	
    	    	});
    	    
    	    
    	    });
    		
    	
    	});
    
    
    };
    
        
    var fixIE = function() {
    
       	
    		var c = new Array();
    		$('img', wrapper).each( function(j) {
        	c[j] = new Image();
        	c[j].src = this.src;

        	if ( $.browser.msie ) {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='"+ this.src +"')"; 
        	}
    		});

    	
    	
    
    
    };
    
    var controls = function() {
    
    	var p1 = $('div.product').eq(0);
    	var p2 = $('div.product').eq(1);
    	var p3 = $('div.product').eq(2);
    	
    	p1.slotmachine({
    		up: $('span.up').eq(0),
    		down: $('span.down').eq(0)
    	});
    	
    	p2.slotmachine({
    		up: $('span.up').eq(1),
    		down: $('span.down').eq(1)

    	});
    	
    	p3.slotmachine({
    		up: $('span.up').eq(2),
    		down: $('span.down').eq(2)

    	});


    
    
    };
    
	this.init = function() {
	
		fixIE();
		prepare();
		insertShadow();
		loader();
		controls();
	
	};

}();


$(function() {

	Slideshow.init();


});