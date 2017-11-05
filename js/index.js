$(function() {
	var slider = $('.slider');
	var sliderUl = slider.find('ul');
	var count = 0;
	var timer = null;

	sliderUl.html(sliderUl.html() + sliderUl.html());
	sliderUl.eq(0).css('width', sliderUl.find('li').length * sliderUl.find('li').eq(0).outerWidth() + 'px');
	var sp = 0;

	function sliderFn() {

		if(sliderUl.position().left <= -sliderUl.width() / 2) {
			sliderUl.css('left', '0px');
		} else if(sliderUl.position().left > 0) {
			sliderUl.css('left', -sliderUl.width() / 2 + 2 + 'px');

		}

		if(sp > 0) {
			var l = sliderUl[0].offsetLeft + sp;
			sliderUl.css('left', l);
		} else {
			var l = sliderUl[0].offsetLeft + sp;
			sliderUl.css('left', l);
		}

		count += 3;
		if(count == sliderUl.find('li').eq(0).outerWidth()) {
			clearInterval(timer);
			count = 0;
		}
	}
	$('.produce_slider>.left').click(function() {
		clearInterval(timer);
		sp = -3;
		timer = setInterval(sliderFn, 9);
	});
	$('.produce_slider>.right').click(function() {
		clearInterval(timer);
		sp = 3;
		timer = setInterval(sliderFn, 9);

	});

	var conten = '';
	var textValue = [];
	$('input[type=text]').each(function(index) {
		textValue.push($(this).val());
		this.index = index;
	})
	$('textarea').each(function(index) {
		textValue.push($(this).val());
		this.index = $('input[type=text]').length;
	})

	inputEvent($('input[type=text]'), textValue, 'white', 'white');
	inputEvent($('textarea'), textValue, 'white', 'white');

})