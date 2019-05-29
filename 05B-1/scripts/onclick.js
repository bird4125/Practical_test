
function notice(){
    var not = $(".sec_c .c1 .c_wrap .contents .not");
    var gal = $(".sec_c .c1 .c_wrap .contents .gall");
    not.css({
        'z-index':'40'
    })
    gal.css({
        'z-index':'30'
    })
}
function gallery(){
    var not = $(".sec_c .c1 .c_wrap .contents .not");
    var gal = $(".sec_c .c1 .c_wrap .contents .gall");
    not.css({
        'z-index':'30'
    })
    gal.css({
        'z-index':'40'
    })
}

function popUp(){
    var lp =  $(".layer_popup");
    lp.css({
        'z-index':'100',
        'opacity':'1'
    })
}
function l_close(){
    var lp =  $(".layer_popup");
    lp.css({
        'z-index':'-50',
        'opacity':'0'
    })
}