$(function() {
	var textValue = [];
	$('input[type=text]').each(function(index) {
		textValue.push($(this).val());
		this.index = index;
	})
	$('textarea').each(function(index) {
		textValue.push($(this).val());
		this.index = $('input[type=text]').length;
	})
	inputEvent($('input[type=text]'),textValue,'#c1c1c1','black');
	inputEvent($('textarea'),textValue,'#c1c1c1','black');
})