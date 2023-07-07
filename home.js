
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
  $(".aboutMePage").fadeOut();
  $(".projectsPage").delay(500).fadeIn();
})
$(".skills").on("click", () =>{
  $(".homePage").fadeOut();
  $(".projectsPage").fadeOut();
  $(".aboutMePage").fadeOut();
  $(".skillsPage").delay(500).fadeIn();
})
$(".backHome").on("click",()=>{
  $(".projectsPage").fadeOut();
  $(".skillsPage").fadeOut();
  $(".aboutMePage").fadeOut();
  $(".homePage").delay(500).fadeIn();
})
$(".aboutMe").on("click", () =>{
  $(".homePage").fadeOut();
  $(".skillsPage").fadeOut();
  $(".projectsPage").fadeOut();
  $(".aboutMePage").delay(500).fadeIn();
})
// $("#weather").on("click",() =>{
//   window.location.href='weather/input.html';
// })
// $("#randomWordGenerator").on("click",() =>{
//   window.location.href='randomword/word.html';
// })

}

$(document).ready(main);














