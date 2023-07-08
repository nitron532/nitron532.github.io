
const main = ()=>{
    $("#landscapePage").fadeIn();


    $(".backHome").on("click",()=>{
        $("#landscapePage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);