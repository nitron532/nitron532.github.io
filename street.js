const main = ()=>{
    $("#streetPage").fadeIn();


    $("#streetPage").on("click",()=>{
        $(".pageContent").fadeOut(function(){
          window.location.href = "index.html";
        })
        })


}
$(document).ready(main);