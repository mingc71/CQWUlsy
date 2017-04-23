// JavaScript Document
$(document).ready(function(e) {
    navFun();
	newFun();
	$("#JS_result").kxbdMarquee({direction:"left",loop:0,scrollDelay:35});
});

//导航二级选项
function navFun(){
	$(".nav>ul>li").hover(function(e) {
		$(this).prevAll("li").children("ul").stop(false, true);
		$(this).nextAll("li").children("ul").stop(false, true);
		$(this).children("ul").stop(false, true);
        $(this).children("ul").slideDown(500);
    },function(){
		$(this).prevAll("li").children("ul").stop(false, true);
		$(this).nextAll("li").children("ul").stop(false, true);
		$(this).children("ul").stop(false, true);
		$(this).children("ul").slideUp(300);
		
	});
}
//新闻滚动
function newFun(){
	if($(".slide").length<=0){ 
			return null; //终止函数运行
		}
		
		
	//计算图片个数
	 var  geshu = $(".slide ul li").length;
	 var  n = 0 ;
	 $(".img_num>a").eq(0).addClass("action");
	
	//计时器
	var  myset = setInterval(function(){
		n++;
		if(n>=geshu){
			n=0;
		}
		gonew();
	},5000);
	
	$(".slide .img_num a").hover(function(e) {
        n = $(this).index();
		 gonew()
    },function(){
		});	
	//计时器停止			
	$("#JS_tab li").hover(function(){
		 	clearInterval(myset);
		},function(){
			 myset = setInterval(function(){
					n++;
					if(n>=geshu){
						n=0;
					}
					gonew();
				},5000);
		});
		
		function gonew(){
			var  slt = $(".slide .img_num a");
			slt.eq(n).addClass("action");
			slt.eq(n).prevAll("a").removeClass("action");
			slt.eq(n).nextAll("a").removeClass("action"); 
			   
			var li = $("#JS_tab li");
			li.hide();
			li.eq(n).show();	
	
		}
}










