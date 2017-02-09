
$(function(){
	//登录弹窗
	if(!$(".login").hasClass("true")){
		$(".login").click(function(){
			$("#login").show();
		})
	}
	else{
		$(".login").click(function(){
			$("#person-center-list").show();
		})
	}
	$(".shadow,.login-close").click(function(){
		$("#login").hide();
	})
	$(".person-center-close,.person-center-list li").click(function(){
		$("#person-center-list").hide();
	})
})
//退出个人中心
$(function(){
	$("#quit").click(function(){
		$("#person-center-list").hide();
		$(".login").find("a").html("登录");
	})
})
//注册、登录页多选框样式改变实现
$(function(){
	
	$(".check-box").click(function(){
		if($(this).next().prop("checked")){
			
			$(this).addClass("inactive");
			$(this).next().prop("checked",false);
		}
		else{
			$(this).removeClass("inactive");
			$(this).next().prop("checked",true);
		}
	})
	$(".service-terms,.remember-pwd").click(function(){
		if($(this).prev().prop("checked")){
			$(this).prev().prev().addClass("inactive");
			$(this).prev().prop("checked",false);
		}
		else{
			$(this).prev().prev().removeClass("inactive");
			$(this).prev().prop("checked",true);
		}
	})
	
})
$(document).ready(function(){
	
	//资源分类弹窗
	$(".menu").click(function(){
		$("#sort-list").show();
	})
	$(".sort-close,.sort-list li").click(function(){
		$("#sort-list").hide();
	})
	
	//首页轮播
	$('.carousel').bxSlider({
		mode: 'horizontal',
		infiniteLoop: true,
		controls: true,
		speed: 500, 
		auto: true,
		autoHover: true,
	    slideWidth: 1024, 
	    slideMargin: 0
	});
	
	//筛选框显影
	$(".filter-title .anchor").click(function(){
		var index = $(this).parent().index();
		$(this).next().show().parent().siblings(".filter-title")
		.find(".active-anchor").hide();
		$(".layer").eq(index).show().siblings(".layer").hide();
	})
	$(".filter-title .active-anchor").click(function(){
		var index = $(this).parent().index();
		$(this).hide();
		$(".layer").eq(index).hide();
	})
	
	$(".type-layer li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().parent().hide();
		$(".filter-title").eq(0).find(".active-anchor").hide();
	})
	$(".area-layer li").click(function(){
		var text = $(this).find("a").text();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().parent().hide();
		$(".filter-title").eq(2).find(".active-anchor").hide();
		$(".filter-title").eq(2).find(".replace").html(text);
	})
		
		var num = 0;
	$(".price-layer li").click(function(){
		num++;
		$(this).addClass("active").siblings().removeClass("active");
		if(num>=2 && $(".bid-price:first-child li").hasClass("active") && $(".bid-price:last-child li").hasClass("active")){
			$(this).parent().parent().parent().hide();
			$(".filter-title").eq(1).find(".active-anchor").hide();
			num = 0;
		}
		else{
			return false;
		}
	})
	$(".filter li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//详情页面展开、收缩
	$(".switch-btn").click(function(){
		var h = $(this).siblings().find(".activity-details").css("height");
		if(h<45){
			$(this).attr("disabled",true);
		}
		else{
			if($(this).parent().hasClass("active")){
				$(this).parent().removeClass("active");
				$(this).removeClass("fold").addClass("unfold");
			}
			else{
				$(this).parent().addClass("active");
				$(this).removeClass("unfold").addClass("fold");
			}
		}
	})
	//加入心愿单
	$(".add-btn").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active").html('<i class="fa fa-heart" style="margin-right:5px;"></i>已在我的心愿单');
			
		}
		else{
			$(this).removeClass("active").html('<i class="fa fa-heart-o" style="margin-right:5px;"></i>加入心愿单');
		}
	})
	//预约
	
	$(".subscribe-item").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass("active");
		}
	})
	
})

//滚到条滚到最下面toolbar隐藏
$(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() >= $(document).height() - $(window).height()){
			$(".toolbar").fadeOut(300);
		}
		else{
			$(".toolbar").fadeIn(300);
		}
	})
})

//排行页面选项卡
$(function(){
	$(".ranklist-nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".list-wrap").eq(index).show().siblings(".list-wrap").hide();
	})
})

//订单评价
$(function(){
	//评分
	$(".score-box li").click(function(){
		$(this).addClass("active");
		$(this).prevAll().each(function(){
			$(this).addClass("active");
		});
		$(this).nextAll().each(function(){
			$(this).removeClass("active");
		})
	})
	//匿名显示是否
	$(".anonymous").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass("active");
		}
	})
})
//支付方式页面
$(function(){
	//支付方式切换
	$(".pay-item .anchor").click(function(){
		var i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".pay-item-content").eq(i).show().siblings().hide();
	})
	//选中银行
	$(".card-bag li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//第三方页面选择图片
	$(".three-pay li>img").click(function(){
		
		if($(this).next().prop("checked")){
			$(this).next().prop("checked",false);
		}
		else{
			$(this).next().prop("checked",true);
		}
	})
})
