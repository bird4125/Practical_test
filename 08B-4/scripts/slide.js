$(document).ready(function(){
    var pos = 1;
    var s1 = $("#wrap .sec_b .slide a:nth-child(1)");
    var s2 = $("#wrap .sec_b .slide a:nth-child(2)");
    var s3 = $("#wrap .sec_b .slide a:nth-child(3)");
    setInterval(function(){
        console.log(pos)
        if(pos == 1){
            s2.addClass('on');
            s3.removeClass('on');
            s1.removeClass('on');
        }else if(pos == 2){
            s2.removeClass('on');
            s3.addClass('on');
            s1.removeClass('on');
        }else if(pos == 3){
            s2.removeClass('on');
            s3.removeClass('on');
            s1.addClass('on');
        }
        
        if(pos == 3) {pos=0}
        pos++;
    },3000)
})