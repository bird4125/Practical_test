$(document).ready(function(){
	$("#wrap #head_sec .head_ri .menus > div").mouseover(function(){
		$(this).children("div").removeClass("on");
	})
	$("#wrap #head_sec .head_ri .menus > div").mouseleave(function(){
		$(this).children("div").addClass("on");	
	})
    
})