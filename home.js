
const main = () =>{

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

$("#landscapeHeader").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "landscape.html";
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
$("#gearNavBar").on("click", () =>{
  $(".homePage").fadeOut(function(){
    window.location.href = "gear.html";
  });
})



}

$(document).ready(main);














