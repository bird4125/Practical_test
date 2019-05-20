$(document).ready(function(){
    var menu = $(".menus .menu_wrap");
    var subm = $(".layer");
    var menli = $(".menus .menu_wrap li a");
    var subli = $(".layer li a");
    menli.mouseover(function(){
        $(this).css({
            'background':'#1d8844',
            'color':'#fff',
            'transition':'.5s'
        })
    })
    
    menli.mouseleave(function(){
        $(this).css({
            'background':'#3cb149',
            'color':'#000',
            'transition':'.5s'
        })
    })
    subli.mouseover(function(){
        $(this).css({
            'background':'rgba(255,255,255,1)',
            'color':'#000',
            'transition':'.5s'
        })
    })
    
    subli.mouseleave(function(){
        $(this).css({
            'background':'none',
            'color':'#fff',
            'transition':'.5s'
        })
    })
    
    menu.mouseover(function(){
        subm.css({

            'top':'100px',
            'transition':'.5s'
        })
    })
     subm.mouseover(function(){
        subm.css({

            'top':'100px',
            'transition':'.5s'
        })
    })
    menu.mouseleave(function(){
        subm.css({
            'top':'-100px',
            'transition':'.5s'
        })
    })
    subm.mouseleave(function(){
        subm.css({
            'top':'-100px',
            'transition':'.5s'
        })
    })
})
