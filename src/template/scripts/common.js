$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var navItem = $('.nav__list > ul > li'),
			navItemCount = navItem.length;

	navItem.css('width', 100 / navItemCount + '%');


	var sliderList = $('.slider__list'),
			sliderDots = $('.slider__dots');


	sliderList.slick({
		arrows: false,
		dots: true,
		appendDots: sliderDots,
		fade: true,
		autoplay: 5000
	})

	$(window).on('load resize', function(event) {
		var sliderDesc = $('.slider__desc')
		sliderDesc.each(function(index, el) {
			var triangle = $(this).find('.triangle'),
					height = $(this).height();

			triangle.css('border-top-width', (height + (18 + 11))  + 'px')
		});
	});

	$('select').styler();


	$('.certificates__list').slick({
		slidesToShow: 6
	})

	$('.gallery__list').slick({
		slidesToShow: 3,
		rows: 2
	})

	$('.reviews__list').slick();


	$('.counts').each(function(index, el) {
		var li = $(this).find('li');
		li.each(function(index, el) {
			$(this).prepend('<span class="count">'+ (index + 1) +'</span>');
		});
	});
});

