
const main = ()=>{
    $("#stillsPage").fadeIn();

    $( ".imgExpand" ).hover(
      function() {
        $( this ).addClass("imgTransition");
       
      }, function() {
        $( this ).removeClass("imgTransition");
       
      }
    );

    $(".backHome").on("click",()=>{
        $("#stillsPage").fadeOut(function(){
          window.location.href = "index.html";
        })
        })
       let stillsList = ["IMG_4534.JPG","IMG_1995.jpg","IMG_1997.jpg",
       "IMG_2571.jpg","IMG_3021.JPG","IMG_3808.JPG","IMG_4171.JPG"
      ,"IMG_4324.JPG","IMG_4400.JPG","IMG_4515.jpg","IMG_4516.JPG","IMG_4517.jpg"
    ,"IMG_4518.jpg","IMG_4530.jpg","IMG_4800.JPG","IMG_4803.JPG"
  ,"IMG_4810.JPG","IMG_4813.JPG","IMG_4823.JPG","IMG_4959.JPG"];
       let counter = 0;
        let pic = "portfolio\\Stills\\IMG_4534.JPG";
        $("#stillsImage").attr("src",pic);
        $("#stillsImage").on("click",()=>{
          if(counter === 19){
            counter = 0;
          }
          else{
            counter++;
          }
          pic = "portfolio\\Stills\\" + stillsList[counter]
          $("#stillsImage").attr("src",pic);
        })
}
$(document).ready(main);