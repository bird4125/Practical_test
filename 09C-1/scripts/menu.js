$(document).ready(function(){
    var main = $("#wrap .left .sec_a .menu_part .menu_wrap li");
    var sub = $("#wrap .left .sec_a .menu_part .menu_wrap li .sub a");
    
    sub.mouseover(function(){
      $(this).css({
        'background':'#000',
        'color':'#fff',
        'transition':'.3s',
        })
    })
    sub.mouseleave(function(){
      $(this).css({
        'background':'inherit',
        'color':'inherit',
        'transition':'.3s'
        })
    })
    
    main.mouseover(function(){
        $(this).children('.sub').css({
            'z-index':'60',
            'opacity':'1',
            'transition':'.5s',
        })
        $(this).css({
            'background':'#fff',
            'color':'#000',
            'transition':'.3s'
        })
    })
     main.mouseleave(function(){
        $(this).children('.sub').css({
            'z-index':'-10',
            'opacity':'0',
            'transition':'.5s',
        })
          $(this).css({
            'background':'#888',
            'color':'inherit',
            'transition':'.3s'
        })
    })
    
})
