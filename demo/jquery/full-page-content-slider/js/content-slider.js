var Slider = {
	fn: {
		setBackgroundSlider: function() {
			var totalWidth = $(window).width(),
				totalHeight = $(window).height(),
				slides = $('div.bg-slide');
			$('#background-slider').css({
				width: totalWidth,
				height: totalHeight
			});
			$('#background-slider-wrapper').css({
				width: totalWidth * slides.length,
				height: totalHeight,
				left: - $('div.bg-slide-current').position().left
			});
			slides.each(function() {
				var slide = $(this),
					url = slide.data('image');
				slide.css({
					width: totalWidth,
					height: totalHeight
				}).backstretch(url);
			});
		},
		setMainSlider: function() {
			var totalWidth = $(window).width(),
				slides = $('div.slider-set');
			$('#main-slider-wrapper').css({
				width: totalWidth * slides.length,
			});
			slides.each(function() {
				$(this).width(totalWidth);
				$(this).find('div.set-center').
				css('left', '50%');
			});
		},
		resize: function() {
			this.setBackgroundSlider();
			this.setMainSlider();
		},
		navigate: function() {
			var index = 0;
			var bgSlides = $('div.bg-slide');
			var mainSlides = $('div.slider-set');
			var max = bgSlides.length;
			$('#next').on('click', function(e) {
				e.preventDefault();
				if (index < max) {
					index++;
				} else {
					index--;
				}
				$('#main-slider-wrapper').animate({
					left: - mainSlides.eq(index).position().left
				}, 800, function() {
					$('#background-slider-wrapper').animate({
						left: -bgSlides.eq(index).position().left
					}, 800, function() {
						bgSlides.eq(index).addClass('bg-slide-current').siblings('div.bg-slide').removeClass('bg-slide-current');
					
					});
				});
			});
			$('#previous').on('click', function(e) {
				e.preventDefault();
				if (index > 0) {
					index--;
				} else {
					index++;
				}
				$('#main-slider-wrapper').animate({
					left: - mainSlides.eq(index).position().left
				}, 800, function() {
					$('#background-slider-wrapper').animate({
						left: -bgSlides.eq(index).position().left
					}, 800, function() {
						bgSlides.eq(index).addClass('bg-slide-current').siblings('div.bg-slide').removeClass('bg-slide-current');
					
					});
				});
			});
		}
	},
	init: function() {
		this.fn.setBackgroundSlider();
		this.fn.setMainSlider();
		this.fn.navigate();
		$(window).on('resize', function() {
			Slider.fn.resize();
		
		});
	}
};
$(function() {
	Slider.init();
});