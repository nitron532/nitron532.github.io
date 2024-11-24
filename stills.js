
const main = ()=>{
    $("#stillsPage").fadeIn();

    $( ".imgExpand" ).hover(
      function() {
        $( this ).addClass("imgTransition");
       
      }, function() {
        $( this ).removeClass("imgTransition");
       
      }
    );
    $('.single-item').slick();
    $('.variable-width').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
      
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