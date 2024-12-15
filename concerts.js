const main = ()=>{
  $("#concertsPage").fadeIn();


  $(".backHome").on("click",()=>{
      $("#concertsPage").fadeOut(function(){
        window.location.href = "index.html";
      })
      })


}
$(document).ready(main);