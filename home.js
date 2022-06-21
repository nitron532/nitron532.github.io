

const main = () =>{
  $(".projectsPage").hide();
    $( ".expand" ).hover(
        function() {
          $( this ).addClass("transition");
        }, function() {
          $( this ).removeClass("transition");
        }
      );
$(".projects").on("click", () =>{
  $(".homePage").fadeOut();
  $(".skillsPage").fadeOut();
  $(".projectsPage").delay(500).fadeIn();
})
$(".skills").on("click", () =>{
  $(".homePage").fadeOut();
  $(".projectsPage").fadeOut();
  $(".skillsPage").delay(500).fadeIn();
})
$(".backHome").on("click",()=>{
  $(".projectsPage").fadeOut();
  $(".skillsPage").fadeOut();
  $(".homePage").delay(500).fadeIn();
})
$("#weather").on("click",() =>{
  window.location.href='weather/input.html';
})
}

$(document).ready(main);

