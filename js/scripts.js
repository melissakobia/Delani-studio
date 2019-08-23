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

  $("img#developmentImage").click(function(){
    $("#devShow").toggle("slow");
    $("#devHidden").toggle("slow");

  });

  $("#devHidden").click(function(){
    $("#devShow").toggle("slow");
    $("#devHidden").toggle("slow");

  });

  $("img#managementImage").click(function(){
    $("#productShow").toggle("slow");
    $("#productHidden").toggle("slow");

  });

  $("#productHidden").click(function(){
    $("#productShow").toggle("slow");
    $("#productHidden").toggle("slow");

  });



  


  

});