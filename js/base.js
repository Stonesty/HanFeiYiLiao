var timer;
var imgArr = ['img/banner.png', 'img/banner1.png', 'img/banner2.png'];
//轮播定时器
function oTime() {
	$('.banner').find('img').attr('src', function() {
		for(var i = 0; i < imgArr.length; i++) {
			if(i + 1 != imgArr.length) {
				if($(this).attr('src') == imgArr[i]) {
					$('.banner').find('ul').find('li').eq(i).removeClass('on');
					$('.banner').find('ul').find('li').eq(i + 1).addClass('on');
					$('.banner').find('.next').css('backgroundImage', 'url(img/nextHover.png)');
					$('.banner').find('.previous').css('backgroundImage', 'url(img/previousHover.png)');

					return imgArr[i + 1];
				}
			} else {
				$('.banner').find('ul').find('li').eq(imgArr.length - 1).removeClass('on');
				$('.banner').find('ul').find('li').eq(0).addClass('on');
				$('.banner').find('.next').css('backgroundImage', 'url(img/next.png)');
				$('.banner').find('.previous').css('backgroundImage', 'url(img/previous.png)');
				return imgArr[0];
			}
		}
	});
}

$(function() {
	
	var page = $('.banner').find('ul').find('li'); //轮播图按钮
	var nextBtn = $('.banner').find('.next'); //轮播图下一张按钮
	var previousBtn = $('.banner').find('.previous'); //轮播图上一张按钮
	var bannerImg = $('.banner').find('img'); //轮播图
	var a = bannerImg.attr('src');
//	var nextImg;

	timer = setInterval(oTime, 5000);
	page.each(function(index) {
		this.index = index; //给page增加index
	}).mouseenter(function() {
		clearInterval(timer);
		page.removeClass('on');
		$(this).addClass('on');
		var ts = this;
//		bannerImg.attr('src', function() {
//			return imgArr[ts.index];
//		})
		bannerImg.attr('src',imgArr[ts.index]);

	}).mouseleave(function() {
		timer = setInterval(oTime, 5000);

	});

	//next和previous按钮事件
	nextBtn.click(function() {
		bannerImg.attr('src', function() {
			for(var i = 0; i < imgArr.length; i++) {
				
				if(i!= imgArr.length-1) {
					if ($(this).attr('src') == a) {
					$(this).attr('src',imgArr[0]);
					}
					if($(this).attr('src') == imgArr[i]) {
						page.eq(i).removeClass('on');
						page.eq(i + 1).addClass('on');
						return imgArr[i + 1];
					}
				} else {
					page.eq(i).removeClass('on');
					page.eq(0).addClass('on');
					return imgArr[0];
				}
			}
		});
	}).mouseenter(function() {
		clearInterval(timer);
	}).mouseleave(function() {
		timer = setInterval(oTime, 5000);
	});
	
	
	previousBtn.click(function() {
		bannerImg.attr('src', function() {
			for(var i = imgArr.length - 1; i >= 0; i--) {
				if(i != 0) {
					if($(this).attr('src') == imgArr[i]) {
						page.eq(i).removeClass('on');
						page.eq(i - 1).addClass('on');
						return imgArr[i - 1];
					}
				} else {
					page.eq(i).removeClass('on');
					page.eq(imgArr.length - 1).addClass('on');
					return imgArr[imgArr.length - 1];

				}

			}
		})
	}).mouseenter(function() {
		clearInterval(timer);
	}).mouseleave(function() {
		timer = setInterval(oTime, 5000);
	});

})