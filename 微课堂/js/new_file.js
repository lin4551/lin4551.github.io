$(function(){
	setRem();						
	window.onresize =function(){	//可视区大小改变触发事件
		setRem();
	}
	nav();	//选项卡
	
//	href()

	function nav(){
		$.each($(".nav-lis"),function(i,ele){
			$(ele).on("click",function(){
				$(this).addClass("active").siblings().removeClass("active");
				$(".content-zc").eq(i).addClass("zc-show").siblings().removeClass("zc-show");
			})
		})
	}
	function setRem(){
		var html =document.getElementsByTagName("html")[0];
		var iW =window.innerWidth;
		var size =iW/16;
		html.style.fontSize = size+"px";
	}
	
	function href(){	
		var arr =[];		//每个演讲的href链接 "https//:..."
		var a =$(".item-btn").parent();
		$.each(a,function(i,ele){
			ele.href = arr[i];
		})
	}
})

