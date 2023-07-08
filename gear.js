
const main = ()=>{
    $("#gearPage").fadeIn();


    $(".backHome").on("click",()=>{
        $("#gearPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);