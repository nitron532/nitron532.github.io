
const main = () =>{
  $("#homePage").fadeIn();

    $( ".expand" ).hover(
        function() {
          $( this ).addClass("transition");
         
        }, function() {
          $( this ).removeClass("transition");
         
        }
      );

  $(".textOnlyShadow").hover(
    function() {
      
      $( this ).addClass("cardShadow");
    }, function() {
      
      $( this ).removeClass("cardShadow");
    }
  );

$("#stillsHeader").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "stills.html";
  });
})
$("#sportsHeader").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "sports.html";
  });
})
$("#streetHeader").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "street.html";
  });
})
$("#concertsHeader").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "concerts.html";
  });
})

}
$(document).ready(main);














