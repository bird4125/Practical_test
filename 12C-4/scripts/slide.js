$(document).ready(function(){
    var ul = $("#wrap .right .sec_b .slide");
    var pos = 1;
    setInterval(function(){
        if(pos==3){pos=0};
        ul.css({
            'margin-left':-pos*100+'%',
            'transition':'.3s'
        });
        pos++;       
        console.log(pos);
    },2000)
})