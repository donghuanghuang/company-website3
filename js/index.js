$(function(){
    //console.log($(".sellNav span"));
    $(".sellNav .fl").on("click",function(){
        if(!$(this).hasClass("z-bor-ra-19 z-bg-008ff8 z-col-fff")){
            $(this).addClass("z-bor-ra-19 z-bg-008ff8 z-col-fff ").siblings().removeClass("z-bor-ra-19 z-bg-008ff8 z-col-fff")
        }else{
            return;
        }
        var index = $(this).index();
        //console.log($(".sellNav1").eq(index));
        //$(".sellNav1").eq(index).addClass("z-dis-b").siblings().addClass("z-dis-no");
            $(".sellNav1>div").eq(index).show().siblings().hide();
        //z-dis-no
    })
})
