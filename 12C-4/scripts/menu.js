$(document).ready(function(){
    var mo = $("#wrap .sec_a .menu_part .main > li");
    mo.mouseover(function(){
        $(this).children('.sub').css({
            'visibility':'visible',
            'opacity':'1',
            'transition':'.1s'
        })
    }) 
    mo.mouseout(function(){
        $(this).children('.sub').css({
            'visibility':'hidden',
            'opacity':'0',
            'transition':'.1s'
        })
    })
    
})