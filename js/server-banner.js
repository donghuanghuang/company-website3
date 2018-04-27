$(function(){
    var dirc = 0;
function a(){
    i=0;
    var timer = setInterval(function(){
        if(!timer){
            clearInterval(timer);
            timer = null;
        }
        i++;
        if(i>3){
            clearInterval(timer);
            dirc = 2;
            b();
            return false;
        }
        var left = parseInt($(".layout ul li").eq(i).css('left'));
        var width =  parseInt($(".layout ul li").eq(i).css('width'));
        left-=225;
        width+=225;
        $(".layout ul li").eq(i).css({
            "transition":"1.5s",
            "left":left,
            "width":width
        })
        //鼠标悬停的时候出发事件
        //$('.sermod').mouseover(function(e){
        //    //clearInterval(timer);
        //    $(".layout ul li").eq(i).css({
        //        "transition":"1.5s",
        //        "left":left,
        //        "width":width
        //    })
        //})
    },1000)
}
function b(){
    var timer = setInterval(function() {
        if(!timer){
            clearInterval(timer);
            timer = null;
        }
        i--;  //1 2 3
        if(i==0){
            clearInterval(timer);
            dirc = 1;
            a();
            return false;
        }
        //console.log(i);
        var left = parseInt($(".layout ul li").eq(i).css('left'));
        var width = parseInt($(".layout ul li").eq(i).css('width'));
        left += 225;
        width -= 225;
        $(".layout ul li").eq(i).css({
            "transition": "1.5s",
            "left": left,
            "width": width
        })
        //鼠标悬停的时候出发事件
        //$('.sermod').mouseover(function(e){
        //    //clearInterval(timer);
        //    var e = e.target;
        //    console.log(e);
        //
        //})
    },1000)
}
    a();



})