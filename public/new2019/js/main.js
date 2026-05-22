
$(document).ready(function() {

	var mvw = 200*$('.imgbox .slider .item').length;
	var mvid = null;
    

	$('#main_visual .imgbox').iosSlider({desktopClickDrag: true,snapToChildren: true,infiniteSlider: true,autoSlide: true,startAtSlide: '1'});
    
	$('#main_visual .btnbox .go').each(function(i) {
		$(this).bind('click', function() {
			$('#main_visual .imgbox').iosSlider('goToSlide', i + 1);
		});
	});

});
