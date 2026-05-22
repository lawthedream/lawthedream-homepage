

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



