(function($) {

	$.fn.validator = function(options) {
	
		var that = this;
		
		if(that[0].tagName.toLowerCase() != 'form') {
		
			throw new Error('Questo plugin funziona con i form.');
			
			return;
		
		}
		
		var settings = {
		
			email: false,
			url: false,
			chars: false,
			messages: {
			
				email: 'Indirizzo e-mail non valido',
				url: 'URL non valido',
				chars: 'I caratteri speciali non sono ammessi'
			
			
			},
			patterns: {
			
				email: /^[a-z-0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/,
				url: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
				chars: /[a-z\s]/i
			
			
			},
			
			error: '<div class="error"/>'
			
		
		
		};
		
		
	    
		
		options = $.extend(settings, options);
		
		var validate = function() {
		
			var valid = true;
		
			if(options.email) {
			
				$('input.email', that).each(function() {
				
					var value = $(this).val();
					
					if(!options.patterns.email.test(value)) {
					
						$(options.error).text(options.messages.email).
						insertAfter($(this));
						
						valid = false;
					
					}	
				
				
				});
			
			}
			
			if(options.url) {
			
				$('input.url', that).each(function() {
				
					var value = $(this).val();
					
					if(!options.patterns.url.test(value)) {
					
						$(options.error).text(options.messages.url).
						insertAfter($(this));
						
						valid = false;
					
					}	
				
				
				});	
			
			
			}
			
			if(options.chars) {
			
				$('.chars', that).each(function() {
				
					var value = $(this).val();
					
					if(!options.patterns.chars.test(value)) {
					
						$(options.error).text(options.messages.chars).
						insertAfter($(this));
						
						valid = false;
					
					}	
				
				
				});	
			
			
			}
		
		  return valid;
		
		};
		
		
		return that.each(function() {
		
		
			that.bind('submit', function(event) {
			
				var valid = validate();
				
				
				if(!valid) {
				
					event.preventDefault();
				
				}
			
			
			
			});	
		
		
		});
	
	
	
	
	};



})(jQuery);