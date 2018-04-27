$(function() {
    //导航栏的功能
    //悬停软件产品文字的时候出现下拉菜单
    $(".soft").mouseenter(function(){
        $(".softwareShow").css({
            "left":"15%",
            "transition":"3s",
            "display":"block"
        });
    }).mouseleave(function(){
        $(".softwareShow").hide();
    })
//悬停下拉菜单文字的时候变色
    $(".li1").hover(function(){
        $(this).find("a").css({
            "color":"#fff"
        })
    })
    $(".li1").mouseleave(function(){
        $(this).find("a").css({
            "color":"#666666"
        })
    })

    //悬停行业系统文字的时候出现下拉菜单
    $(".trade").mouseenter(function(){
        $(".tradeList").show();
    }).mouseleave(function(){
        $(".tradeList").hide();
    })

    $(".li2").hover(function(){
        $(this).find("a").css({
            "color":"#fff"
        })
    })
    $(".li2").mouseleave(function(){
        $(this).find("a").css({
            "color":"#666666"
        })
    })
//悬停的时候出现上边界

})