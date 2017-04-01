var Gallery = {

	create: function() {
	
		var html = '<div id="overlay"></div>';
		    html += '<div id="lightbox">';
		    html += '<img id="lightbox-image"/>';
		    html += '<div id="lightbox-nav"></div>';
		    html += '<span id="lightbox-close">X</span>';
		    html += '</div>';
		$(html).appendTo('body');
    },
    
    
    navigation: function() {
    
    	var images = $('img', '#gallery'),
    	    len = images.length,
    	    i;
    	    
    	for(i = 0; i < len; i++) {
    	
    	    $('a', '#gallery').eq(i).attr('rel', i);
    	
    		$('<a/>').attr('rel', i).text(i+1).
    		appendTo('#lightbox-nav');
    	
    	
    	}
    
    
    },

    current: function(index) {
    
    	var link = $('a','#lightbox-nav').eq(index);
    	link.addClass('current').siblings().removeClass('current');
    
    },
    
    reveal: function() {
    
    	$('a', '#gallery').click(function(e) {
    	
    		e.preventDefault();
    		
    		var $a = $(this);
    		var src = $('img', $a).attr('src');
    		$('#lightbox-image').attr('src', src);
    		var $index = $a.attr('rel');
    		
    		Gallery.current($index);
    		
    		$('#overlay').show(0, function() {
    			$('#lightbox').fadeIn(600);
    		});
    	
    	
    	});
    
    
    
    },
    
    hide: function() {
    
    	$('#lightbox-close').click(function() {
    	
    		$('#lightbox').fadeOut(600, function() {
    		
    			$('#overlay').hide();
    		
    		
    		});
    	
    	
    	});
    
    
    
    },
    
    navigate: function() {
    
    	$('a', '#lightbox-nav').click(function(e) {
    		e.preventDefault();
    		var $a = $(this);
    		if(!$a.hasClass('current')) {
    		
    			var rel = $a.attr('rel');
    			$('#lightbox-image').attr('src', $('img', '#gallery').eq(rel).attr('src'));
    			Gallery.current(rel);
    		
    		
    		}
    		
    	});
    
    
    },
    
        
    
    init: function() {
    
    	for(var i in this) {
    	
    		if(typeof this[i] === 'function' && this[i] !== arguments.callee) {
    		
    			this[i]();
    		
    		}
    	
    	
    	}
    
    
    }
};

$(function() {
	Gallery.init();
});
    