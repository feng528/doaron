$(function() {
	$(".j-nextshow").click(function(e) {
		e.preventDefault();
		var i = $(this),
			s = i.next();
		if (s.is(":hidden")) {
			s.slideDown()
		} else {
			s.slideUp()
		}
	});
	var e = $(".tab-options li");
	e.click(function() {
		i = $(this).index();
		$(this).addClass("tab-active").siblings().removeClass("tab-active");
		var e = $(this).parents().next().find(".tab-content-item");
		e.eq(i).fadeIn(500).siblings(".tab-content-item").hide()
	});
	$(window).scroll(function() {
		var e = $(document).scrollTop();
		if (e != 0) {
			$(".back-top").css("bottom", "100px")
		}
		if (e == 0) {
			$(".back-top").css("bottom", "-100px")
		}
	});
	$(".back-top").click(function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 300)
	});
	$(".nlazy").lazyload({
		effect: "fadeIn"
	});
	baguetteBox.run(".baguetteBoxOne", {
		animation: "fadeIn"
	});
	$("table").wrap("<div class='table'></div>");
	$(".contact-phone .ewm-box").click(function(e) {
		e.preventDefault();
		var i = $(this),
			s = i.children(".ewm");
		if (s.is(":hidden")) {
			s.show()
		} else {
			s.hide()
		}
	});
	$(".pro2-title.nextshow").click(function(e) {
		e.preventDefault();
		var i = $(this),
			s = i.next();
		if (s.is(":hidden")) {
			s.slideDown();
			i.addClass("active")
		} else {
			s.slideUp();
			i.removeClass("active")
		}
	});
	if (window.screen.width >= 768) {
		$(window).scroll(function() {
			var e = $(".header").offset().top;
			if (e > 0) {
				$(".header").addClass("fixed");
				$(".phone_nav .menubtn span").addClass("white")
			} else {
				$(".header").removeClass("fixed");
				$(".phone_nav .menubtn span").removeClass("white")
			}
		})
	}
	$(".search .icon-open").click(function() {
		$("body").addClass("seach-body");
		$(".search-backdrop").slideDown();
		$(this).hide();
		$(this).next().show();
		$(".header").addClass("fixed")
	});
	$(".search .icon-close").click(function() {
		$("body").removeClass("seach-body");
		$(".search-backdrop").slideUp();
		$(this).hide();
		$(this).prev().show();
		var e = $(".header").offset().top;
		if (e > 0) {
			$(".header").addClass("fixed");
			$(".phone_nav .menubtn span").addClass("white")
		} else {
			$(".header").removeClass("fixed");
			$(".phone_nav .menubtn span").removeClass("white")
		}
	});
	if (window.screen.width > 1024) {
		$(".related-scroll .scroll-list-box").mousemove(function(e) {
			var i = $(".related-scroll .scroll-list-box").offset().left;
			var s = $(".related-scroll .scroll-list-box").innerWidth();
			var t = e.screenX;
			if (t > i && t < i + s / 2) {
				$(this).find(".prev.scroll-btn").show();
				$(this).find(".next.scroll-btn").hide()
			}
			if (t < i + s && t > i + s / 2) {
				$(this).find(".next.scroll-btn").show();
				$(this).find(".prev.scroll-btn").hide()
			}
		});
		$(".related-scroll .scroll-list-box").mouseout(function(e) {
			$(this).find(".prev.scroll-btn,.next.scroll-btn").hide()
		})
	}
	if (window.screen.width > 1024) {
		$(".msolution-scroll .scroll-list-box").mousemove(function(e) {
			var i = $(".msolution-scroll .scroll-list-box").offset().left;
			var s = $(".msolution-scroll .scroll-list-box").innerWidth();
			var t = e.screenX;
			if (t > i && t < i + s / 2) {
				$(this).find(".prev.scroll-btn").show();
				$(this).find(".next.scroll-btn").hide()
			}
			if (t < i + s && t > i + s / 2) {
				$(this).find(".next.scroll-btn").show();
				$(this).find(".prev.scroll-btn").hide()
			}
		});
		$(".msolution-scroll .scroll-list-box").mouseout(function(e) {
			$(this).find(".prev.scroll-btn,.next.scroll-btn").hide()
		})
	}
});
