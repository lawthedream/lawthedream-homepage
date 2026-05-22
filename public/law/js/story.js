/**
 * Created by Administrator on 2015-10-16.
 */
(function($){
    "use strict";
    $(function(){
		var $win = $(window);

		$(document).on('ready', tabscollgo);


		var $doc= $(document);
		var $header= $('.header');
		var tabBarOffset_y;

		var $tabbox = $(".story-tab");
		var $storytit= $('.story-tit');
		var $tabboxskity = $tabbox.find(".tabtype-dropbox");
		var $tabboxitem = $tabboxskity.find("li");
		var $scrolltab = $tabbox.find("a");
		var scrollpos =  parseInt($doc.scrollTop() + $header.height());

		if($tabbox.length) {
			$win.on('scroll', scrollchk);
			$win.on('resize', scrollchk);
		}

		function scrollchk() {
			scrollpos = parseInt($doc.scrollTop() + $header.height());
			tabBarOffset_y = parseInt($tabbox.offset().top);

			var posLeft = ($(window).outerWidth() / 2) - ($tabbox.width() / 2);

			if(scrollpos > tabBarOffset_y) {
				$tabboxskity.css({
					//'position' : 'fixed',
					'left' : posLeft,
					//'top' : $header.height(),
					'top' : '0',
					'width' : $tabbox.width(),
					'z-index' : '200'
				});
			} else {
				$tabboxskity.css({
					'position' : 'relative',
					'left' : '0',
					'top' : '0',
					'width' : 'auto',
					'z-index' : 'auto'
				});
			}

			atabActivechk();

		}

		function atabActivechk(){
			var chkarry = [];

			$storytit.each(function(idx){


				chkarry[idx] = $storytit.eq(idx).offset().top  - $tabbox.height();
				if(scrollpos > chkarry[idx]) {
					if(TweenMax.isTweening($win)) return;
					$scrolltab.parent().removeClass("active");
					$tabboxitem.eq(idx).addClass("active");
				}
			});
		}


        function tabscollgo(){
            $scrolltab.on('click', movescroll);
        }

        function movescroll(){
            var $this = $(this);
            var $thisparent = $this.parent();
            $scrolltab.parent().removeClass("active");
            $thisparent.addClass("active");

            var target =  $this.attr("href");
            var offsetTop = $(target).offset().top;
            var headHeight = $(".header").height();
            var sctop = offsetTop - headHeight - $this.height() +10 ;


			TweenMax.to($win, 1.2, {scrollTo:{y:sctop}, ease:Expo.easeOut});

            return false;
        }
    });
})(jQuery);

