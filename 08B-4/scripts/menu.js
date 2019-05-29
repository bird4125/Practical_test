$(document).ready(function(){
    var menu = $("#wrap .sec_a .wrap .menu_part li a")
    var sub = $("#wrap .sec_a .sub_menu");
    menu.mouseover(function(){
        sub.css({
            'top':'100px',
            'transition':'.5s'
        })
    })
    menu.mouseout(function(){
        sub.css({
            'top':'-60px',
            'transition':'.5s'
        })
    })
    sub.mouseover(function(){
        sub.css({
            'top':'100px',
            'transition':'.5s'
        })
    })
    sub.mouseout(function(){
        sub.css({
            'top':'-60px',
            'transition':'.5s'
        })
    })
    
})