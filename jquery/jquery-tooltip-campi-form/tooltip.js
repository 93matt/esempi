var Tooltip = {

	form: $('#form'),
	
	handle: function() {
	
		var context = this.form;
		
		$('div.tooltip-trigger', context).each(function() {
		
			var $trigger = $(this);
			var $tooltip = $('div.tooltip', $trigger);
			
			$trigger.click(function() {
			
				if($tooltip.is(':hidden')) {
				
					$tooltip.fadeIn(500);
				
				} else {
				
					$tooltip.fadeOut(500);
				
				}
			
			
			});
			
		
		
		});
	
	
	}


};

$(function() {

	Tooltip.handle();

});