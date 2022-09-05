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

	$('.js-open-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('html').addClass('is-fixed');
		$('.js-menu').addClass('is-opened');
	});

	$('.js-close-menu-btn, .nav-overlay').on('click', function(e) {
		e.preventDefault();

		$('html').removeClass('is-fixed');
		$('.js-menu').removeClass('is-opened');
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

	// Popup
	$('.js-open-support-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-support-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========


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


	if ($('.aside').length> 0) {
		$('.content, .aside').theiaStickySidebar({
			additionalMarginTop: 20
		});
	}

	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 1300);
	


});
