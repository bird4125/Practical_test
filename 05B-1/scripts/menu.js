$(document).ready(function(){
    var menu = $("#wrap .sec_a .in_wrap .menu_part .main a");
    var sub = $("#wrap .sec_a .in_wrap .menu_part .sub");
    var suba = $("#wrap .sec_a .in_wrap .menu_part .sub li a");
    menu.mouseover(function(){
        sub.css({
            'top':100+'px',
            'transition':'.5s'
        })
        $(this).css({
            'background':'rgba(0,0,0,0.3)',
            'transition':'.3s',
            'color':'#fff'
        })
    })
    menu.mouseleave(function(){
        sub.css({
            'top':-100+'px',
            'transition':'.5s'
        })
        $(this).css({
            'background':'rgba(0,118,190,1)',
            'transition':'.3s',
            'color':'#000'
        })
    })
    suba.mouseover(function(){
        sub.css({
            'top':100+'px',
            'transition':'.5s'
        })
        $(this).css({
            'background':'rgba(0,0,0,0.3)',
            'transition':'.3s',
            'color':'#fff'
        })
    })
    suba.mouseleave(function(){
        sub.css({
            'top':-100+'px',
            'transition':'.5s'
        })
        $(this).css({
            'background':'rgba(0,118,190,1)',
            'transition':'.3s',
            'color':'#000'
        })
    })
})