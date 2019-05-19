$(document).ready(function(){
	$("#wrap #head_sec .head_ri .menus > div").mouseover(function(){
		$(this).children("div").removeClass("on");
	})
	$("#wrap #head_sec .head_ri .menus > div").mouseleave(function(){
		$(this).children("div").addClass("on");	
	})
})
function popUp(){
    $(".pop").css({
        'opacity':'1',
        'z-index': '100'
    })
}
function popDown(){
    $(".pop").css({
        'opacity':'0',
        'z-index': '-100'
    })
}
