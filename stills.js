
const main = ()=>{
    $("#stillsPage").fadeIn();


    $(".backHome").on("click",()=>{
        $("#stillsPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);