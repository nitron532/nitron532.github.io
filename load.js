const main = ()=>{
    $(".pageContent").fadeIn();


    $(".backHome").on("click",()=>{
        $(".pageContent").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);