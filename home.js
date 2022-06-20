

const main = () =>{
    $( ".expand" ).hover(
        function() {
          $( this ).addClass("transition");
        }, function() {
          $( this ).removeClass("transition");
        }
      );


}

$(document).ready(main);


//add class to all home page elements, when clicked on project button,
// fade out all home page elements and fade in all product page elements