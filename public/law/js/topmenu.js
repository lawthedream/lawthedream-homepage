

//gnb move2
$(document).ready(function(e) {
    
	/*	*/
	//메뉴 나타남
	$('#top_link > li').mouseover(function(){
		//window.alert('aa')
		$(this).find('>ul').stop().slideDown(300)
		
		
	})
	//메뉴 사라짐
	$('#top_link > li').mouseout(function(){
		$(this).find('>ul').stop().slideUp(300)
	})
	
	
});


//상단메뉴고정

$(function () {

	var scrollOffsetY = 20; 
	var scrollTop;
	$(window).on('scroll', function() {		
		scrollFn();
	});

	scrollFn();
	function scrollFn(){

		scrollTop = $(document).scrollTop();
		if (scrollTop > 0) {
			$("#header").addClass('fixed_top');
		} else {
			$("#header").removeClass('fixed_top');
		}
	}

		
});
