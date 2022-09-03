$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	if ($('.js-promo-slider').length > 0) {
		var promoSlider = new Swiper('.js-promo-slider', {
			loop: true,
			speed: 1000,
			pagination: {
				clickable: true,
				el: '.js-promo-slider-pagination'
			},
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 20,
				slideShadows: false,
			},
		});
	}


	$('.subscribe-input').on('focus', function(e) {
		$(this).next('span').css('width', '100%');
	});

	$('.subscribe-input').on('blur', function(e) {
		if ($(this).val() != '' || $(this).val()) {
			$(this).next('span').css('width', '100%');
		} else {
			$(this).next('span').css('width', '0%');
		}
		
	});

	$('.contacts-form .wpcf7-form').on('wpcf7submit', function(e) {
		var self = $(this),
				inputs = self.find('.wpcf7-validates-as-required'),
				flag = true;

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).parents('.form-label').addClass('is-error');
				flag = false;
			}
		});

		if(!flag) {return false;}

		

	});


	$('.wpcf7-form').on('wpcf7mailsent', function(e) {
		window.location.href = '/thank-you';
	});


});
