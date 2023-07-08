const main = ()=>{
    $("#streetPage").fadeIn();


    $(".backHome").on("click",()=>{
        $("#streetPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);