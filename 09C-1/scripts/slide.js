$(document).ready(function(){
    var pos = 1;
    var slide1 = $("#wrap .right .sec_b .slide a.s1");
    var slide2 = $("#wrap .right .sec_b .slide a.s2");
    var slide3 = $("#wrap .right .sec_b .slide a.s3");
    setInterval(function(){
     if(pos == 1){
         slide3.fadeOut();
         slide1.fadeIn();
    } else if(pos == 2){
        slide1.fadeOut();
        slide2.fadeIn();
    } else if(pos == 3) {
        slide2.fadeOut();
        slide3.fadeIn();
        pos=0;
    }
        pos++;
        console.log(pos);
    },3000)
})