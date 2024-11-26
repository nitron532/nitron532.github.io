
const main = ()=>{
    $("#stillsPage").fadeIn();

    // $( ".imgExpand" ).hover(
    //   function() {
    //     $( this ).addClass("imgTransition");

    //   }, function() {
    //     $( this ).removeClass("imgTransition");
       
    //   }
    // );

    $( ".imgExpand" ).hover(
      function() {
        $( this ).addClass("imgTransition");
       
      }, function() {
        $( this ).removeClass("imgTransition");
       
      }
    );
    $('.responsivePortrait').slick({
      dots: true,
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
            dots: true
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
          dots: true,
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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $(".backHome").on("click",()=>{
        $("#stillsPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })
        //loop thru directory, use length instead of hardcoded counter?
        /*
        let stillsList = ["IMG_0399.JPG", "IMG_0395.JPG" ];
        let counter = 0;
        let pic = "portfolio\\Stills\\IMG_0399.JPG"; //cover image
        $("#stillsImage").attr("src",pic);
        $("#stillsImage").on("click",()=>{
          if(counter === stillsList.length-1){
            counter = 0;
          }
          else{
            counter++;
          }
          pic = "portfolio\\Stills\\" + stillsList[counter]
          $("#stillsImage").attr("src",pic);
        })
        */
}
$(document).ready(main);