var MailBox = new function() {

	var elementActions = {
	
		inbox: $('#inbox'),
		write: $('#write')
		
	
	};
	
	var addAction = function(element, name, callback) {
	
		element.bind(name, callback);
		element.click(function(event) {
				
			element.trigger(name);
		
			event.preventDefault();
		
		});
	
	
	};
	
	var initialize = function() {
	
		addAction(elementActions.inbox, 'showInbox', function() {
		
			$('div.inbox').slideDown('slow').siblings().hide();
		
		});
		
		addAction(elementActions.write, 'showMessageForm', function() {
		
			if($('div.sent').length > 0) {
			
				$('div.sent').remove();
			
			}
		
			$('div.write').slideDown('slow').siblings().hide();
		
		});	
		
	
		
		
		$('h4.mail-title', 'div.mail').each(function() {
		
		
			var $h4 = $(this);
			
			addAction($h4, 'showMessage', function() {
			
				var next = $(this).next();
				
				if(next.is(':hidden')) {
				
					next.slideDown('slow');
				
				} else {
				
					next.slideUp('slow');
				
				}
			
			
			});
		
		
		});
		
		$('a.delete', 'div.mail').each(function() {
		
		
			var $a = $(this);
			
			addAction($a, 'deleteMessage', function() {
			
				var mail = $(this).parents('div.mail');
				
				mail.fadeOut('slow', function() {
				
					mail.remove();
					
					if($('div.write').is(':visible')) {
					
						$(':input', 'div.write').not(':submit').val('');
						$('div.write').hide();
					
					
					}
				
				
				});
			
			
			});
		
		
		});
		
		$('a.spam', 'div.mail').each(function() {
		
		
			var $a = $(this);
			
			addAction($a, 'markAsSpam', function() {
			
				var mail = $(this).parents('div.mail');
				
				mail.addClass('spam');	
				
				
				if($('div.write').is(':visible')) {
					
						$(':input', 'div.write').not(':submit').val('');
						$('div.write').hide();
					
					
				}		
			});
		
		
		});
		
		
		$('a.reply', 'div.mail').each(function() {
		
		
			var $a = $(this);
			
			addAction($a, 'replyToMessage', function() {
			
			    if($('div.sent').length > 0) {
			
				$('div.sent').remove();
			
			}
			
				var mail = $(this).parents('div.mail');
				var mailTitle = $('h4.mail-title', mail);
				var subject = mailTitle.find('a').text();
				var to = $('a.contact', mail).text();
				
				$('#subject', 'div.write').val('Re: ' + subject);
				$('#to', 'div.write').val(to);
				$('div.write').slideDown('slow');
			
			
			});
		
		
		
		});

		
		$('form', 'div.write').submit(function(event) {
		
		    var $form = $(this);
		    var $div = $('div', $form);
			
			$('<div class="sent"/>').
			text('Messaggio inviato!').
			insertBefore($div);
		
			event.preventDefault();
		
		});
		
		
	
	};
	
	this.run = function() {
	
		initialize();
		
		
	
	};


}();

$(function() {

	MailBox.run();


});
