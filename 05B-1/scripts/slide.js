$(document).ready(function(){
    var body = $(".sec_b .in_wrap .slide");
    var pos = 1;
    setInterval(function(){
        body.css({
            'margin-left':-pos*100+'%'
        })
        pos++;
        if(pos == 3){pos=0};
    },2500)
})