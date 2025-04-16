const main = ()=>{
  $("#concertsPage").fadeIn();

  $(window).on(load, function(){
    $(".loading").fadeOut("fast");
  }); 

  $(".backHome").on("click",()=>{
      $("#concertsPage").fadeOut(function(){
        window.location.href = "index.html";
      })
      })
      $( ".imgExpand" ).hover(
        function() {
          $( this ).addClass("imgTransition");
         
        }, function() {
          $( this ).removeClass("imgTransition");
        }
      );
      $('.responsivePortrait').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
          });
  
          $('.responsiveLandscape').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
      });

}
$(document).ready(main);