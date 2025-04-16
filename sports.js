const main = ()=>{
  $(window).on("load", () =>{
    $(".loading").hide();
  }); 
    $("#sportsPage").fadeIn();


    $(".backHome").on("click",()=>{
        $("#sportsPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);