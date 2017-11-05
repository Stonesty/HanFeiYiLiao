function getByClass(oParent, sClass) {
	var aEle = $('*');
	var res = [];
	for(var i = 0; i < aEle.length; i++) {
		if(sClass == aEle[i].className) {
			res.push(aEle[i]);
		}
	}
	return res;
}

$(function() {
	var photo = $('.photo')[0];
	var oBigP = $('.big_photo');
	var aBigLi = $(oBigP).find('li');
	var oSmallP = $('.small_photo');
	var oSmallUl = $(oSmallP).find('ul');
	var aSmallLi = $(oSmallUl).find('li');
	var aSmallSpan = $(aSmallLi).find('span');
	var now = 0; //记录当前图片的index值
	var zzIndex = 1;
	aBigLi.eq(0).css('z-index', ++zzIndex);
	aSmallSpan.eq(0).css('display', 'block');
	aSmallLi.each(function(index) {
		this.index = index;
	}).click(function() {
		for(var i = 0; i < aSmallSpan.length; i++) {
			aSmallSpan.eq(i).css('display', 'none');
		}
		now = this.index;
		aBigLi.eq(now).css('z-index', ++zzIndex);
		aSmallSpan.eq(now).css('display', 'block');
	})
})