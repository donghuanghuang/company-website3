$(function(){
    $.ajax({
        type:'get',
        url:'header.html'
    }).then(function(html){
        //console.log(html);
        $("#header").html(html);
    });



})
