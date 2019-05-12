$(document).ready(function () {
    var title = $("#head_sec .head_ri .menus a");
    var subtitle = $("#head_sec .head_ri .sub_me ul");
    title.mouseover(function(){
        title.animate({
            color : "#faf"
        },500)
        subtitle.animate({
            bottom : "-150px"
        },500);
    });
    title.mouseout(function(){
        subtitle.animate({
            bottom : "-0px"
        },500);
    });
    
})