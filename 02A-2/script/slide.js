$(document).ready(function () {
    var ul = $(".slide");
    var li = $(".slide a").length;
    var pos = 1;
    setInterval(function(){
        ul.css({
            'margin-left':-pos*100+'%',
            'transition':'.5s'
        })
        pos++;
        if(pos==li){pos=0};
    },3000)
})
