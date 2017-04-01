/** WPUtils: A generic jQuery utility for Wordpress
 *
 *  @version 1.0
 *  @author Gabriele Romanato <gabriele.romanato@gmail.com>
 *  @requires jQuery 1.5+
 *  @license This work is public domain
 */

(function($) {

	$.WPUtils = {
	
	    /** Check if a document is the home page
	     *  @return Boolean
	     */
	
		isHome: function() {
		
			if(!$('body').hasClass('home')) {
			
				return false;
			
			}
			
			return true;
		
		},
		
		 /** Check if a document is a Wordpress page
	      *  @return Boolean
	      */
	
		isPage: function() {
		
			if(!$('body').hasClass('page')) {
			
				return false;
			
			}
			
			return true;
		
		},
		
		 /** Check if a document is a single post page
	      *  @return Boolean
	      */
		
		isSingle: function() {
		
			if(!$('body').hasClass('single')) {
			
				return false;
			
			}
			
			return true;
		
		
		},
		
		 /** Check if a document is an archive page
	      *  @return Boolean
	      */
		
		isArchive: function() {
		
			if(!$('body').hasClass('archive')) {
			
				return false;
			
			}
			
			return true;
		
		
		},
		
		 /** Check if a document is a tag page	     
		  *  @return Boolean
	      */
		
		isTag: function() {
		
			if(!$('body').hasClass('tag')) {
			
				return false;
			
			}
			
			return true;
		
		
		},
		
		/** Binds a callback function to the ready() event
		 *  of the document object
		 *  @return void
		 */
				
		load: function(callback) {
		
			$(document).bind('ready', callback);
		
		
		}
	
	
	};



})(jQuery);