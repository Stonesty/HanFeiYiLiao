function inputEvent(obj, arr, defaultColor, color) {
	obj.focus(function() {
		clearText($(this), arr, color);
	}).blur(function() {
		returnText($(this), arr, defaultColor);
	})
}

function clearText(oThis, arr, color) {
	for(var i = 0; i < arr.length; i++) {
		if(oThis.val() == arr[oThis[0].index]) {
			oThis.val('');
		}
	}
	oThis.css('font-family', '微软雅黑');
	oThis.attr('spellcheck', 'false');
	if(color) {
		oThis.css('color', color);
	}
}

function returnText(oThis, arr, color) {
	if(oThis.val() == '') {
		oThis.val(arr[oThis[0].index]);
		if(color) {
			oThis.css('color', color);
		}
	}
}