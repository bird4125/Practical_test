/*
$(document).ready(function () {
    var ul = $(".slide");
    var li = $(".slide a").length;
    var pos = 1;
    setInterval(function(){
        ul.css({
            'margin-top':-pos*300+'px',
            'transition':'.5s'
        })
        pos++;
        if(pos==li){pos=0};
    },3000)
})

*/
var pos = 0;
$(document).ready(function () {
    setInterval(fadeStart,3000);
})

function fadeStart(){
    pos++;    
    if(pos==1){
        $(".slide a:nth-child(1)").css({
            'opacity':'1',
            'z-index':'30'
        });
        $(".slide a:nth-child(2)").css({
            'opacity':'0',
            'z-index':'20'
        });
        $(".slide a:nth-child(3)").css({
            'opacity':'0',
            'z-index':'10'
        });
    } else if(pos==2){
         $(".slide a:nth-child(1)").css({
            'opacity':'0',
            'z-index':'10'
        });
        $(".slide a:nth-child(2)").css({
            'opacity':'1',
            'z-index':'30'
        });
        $(".slide a:nth-child(3)").css({
            'opacity':'0',
            'z-index':'20'
        });
    } else if(pos==3){
         $(".slide a:nth-child(1)").css({
            'opacity':'0',
            'z-index':'10'
        });
        $(".slide a:nth-child(2)").css({
            'opacity':'0',
            'z-index':'20'
        });
        $(".slide a:nth-child(3)").css({
            'opacity':'1',
            'z-index':'30'
        });
        pos=0;
    }
}

