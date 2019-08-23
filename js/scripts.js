$(document).ready(function(){

  //Toggles the design image
  $("img#designImage").click(function(){
    $("#designShow").toggle("slow");
    $("#designHidden").toggle("slow");

  });

  $("#designHidden").click(function(){
    $("#designShow").toggle("slow");
    $("#designHidden").toggle("slow");

  });

  


  

});