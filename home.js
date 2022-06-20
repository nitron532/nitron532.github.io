

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
}

$(document).ready(main);


//add class to all home page elements, when clicked on project button,
// fade out all home page elements and fade in all product page elements