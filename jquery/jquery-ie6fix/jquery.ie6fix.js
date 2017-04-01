/** IE6Fix
   @version 2.0
   @require jQuery 1.4+
   @author Gabriele Romanato <gabriele.romanato@gmail.com>
   @note Fixes CSS rendering inconsistencies of Internet Explorer 6.
         For further reading see http://www.satzansatz.de/cssd/onhavinglayout.html 
         
   Usage: $(element).ie6Fix(options);
         
         
*/


(function($) {


  $.fn.ie6Fix = function(options) {
  
    var that = this;
    
    var defaults = {
      gainLayout: false,
      doubledMarginBug: false,
      italicBug: false,
      textJogBug: false,
      lineHeightBug: false,
      clearFix: false
    };
    
    options = $.extend(defaults, options);
    
    return that.each(function() {
    
      var element = $(this);
    
    
      if(options.gainLayout) {
      
        if(element.css('display') == 'block') {
	     element.css('height', '1%');
	    } else if(element.css('display') == 'inline') {
	     element.css('zoom', '1');
	    }
      
      }
      
      if(options.doubledMarginBug) {
      
        if(element.css('float') !== 'none') {
	
	       if(element.css('marginLeft') !== '0' || element.css('marginRight') !== '0') {
	         element.css('display', 'inline');
	       }
	
	    }
      
      
      }
      
      if(options.italicBug) {
      
      
        if(element.css('fontStyle') == 'italic') {
	
	      element.css({'overflow': 'visible', 'height': '1%'});
	
	
	    }
      
      
      }
      
      if(options.textJogBug) {
      
        var floating = null;
        
        if(element.prev().length > 0) {
        
        
          floating = element.prev();
        
        } else {
        
          floating = element.next();
        
        }
        
        if(floating.css('float') == 'left') {
	      if(element.css('marginLeft') >= floating.width()) {
	        element.css('marginLeft', '-3px');
	      }
	    } else if(floating.css('float') == 'right') {
	
	      if(element.css('marginRight') >= floating.width()) {
	   
	        element.css('marginRight', '-3px');
	   
	       }
	
	    }

        
        
      
      
      }
      
      if(options.lineHeightBug) {
      
        if(element[0].tagName.toLowerCase() != 'img') {
        
          throw new Error('This option works only on inline images.');
          
          return;
        
        
        }
        
        var height = element.height();
        
        element.css({
		    'marginTop': height / 3,
		    'marginBottom': height / 3,
		    'vertical-align': 'middle'
		});
		
      
      
      }
      
      if(options.clearFix) {
      
        element.css({'overflow': 'hidden', 'height': '1%'});
      
      
      }
    
    
    });


  };


})(jQuery);