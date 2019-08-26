$(document).ready(function () {
  $("#btnSubmit").click(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // if ($('#name').val() == '') {
    //   alert('please fill the form');
    // }
    // else if ($('#email').val() == '') {
    //   alert('please fill the form');
    // }
    // else if ($('#message').val() == '') {
    //   alert('please fill the form');
    // }
    // else {

    //   alert("Dear" + userName + ";" + " we have received your message.Thank you for reaching out to us.");
    // }
    ' '


    if ($("#name").val === "" || $("#email").val === "" || $("#message").val === "") {
      alert("Fill all the spaces");

    }
    else if ($("#name").val === !isNaN || $("#email").val === !isNaN || $("#message").val === !isNaN) {
      alert("Invalid Input");

    }
    else {
      alert("Dear " + name + " we have recieved your message. Thank you for reaching out to us.");

    }
  });





});



$(document).ready(function () {

  //Toggles the design image
  $("img#designImage").click(function () {
    $("#designShow").toggle("slow");
    $("#designHidden").toggle("slow");

  });

  $("#designHidden").click(function () {
    $("#designShow").toggle("slow");
    $("#designHidden").toggle("slow");

  });

  $("img#developmentImage").click(function () {
    $("#devShow").toggle("slow");
    $("#devHidden").toggle("slow");

  });

  $("#devHidden").click(function () {
    $("#devShow").toggle("slow");
    $("#devHidden").toggle("slow");

  });

  $("img#managementImage").click(function () {
    $("#productShow").toggle("slow");
    $("#productHidden").toggle("slow");

  });

  $("#productHidden").click(function () {
    $("#productShow").toggle("slow");
    $("#productHidden").toggle("slow");

  });

  // $("#img1").hover(function(){
  //   $("#imghidden1").show();
  //   }, function(){
  //   $("#img1").show();
  // });

  // $("#img1").hover(
  //   function(){
  //     $("#img1").animate({opacity: ".3"}, 400);
  //     $("#imghidden1").show().animate({top:"55px"}, 0);
  //   },
  //   function(){
  //     $("#img1").animate({opacity: "1.0"}, 400);
  //     $("#imghidden1").hide().animate({top:"85px"}, 0);
  //   }
  // );

  $("#img1").hover(function () {
    $("#img1").mouseover(function () {
      $("#imgHidden1").show();
    });
    $("#img1").mouseout(function () {
      $("#imgHidden1").hide();
    });
  });

  $("#img2").hover(function () {
    $("#img2").mouseover(function () {
      $("#imgHidden2").show();
    });
    $("#img2").mouseout(function () {
      $("#imgHidden2").hide();
    });
  });

  $("#img3").hover(function () {
    $("#img3").mouseover(function () {
      $("#imgHidden3").show();
    });
    $("#img3").mouseout(function () {
      $("#imgHidden3").hide();
    });
  });

  $("#img4").hover(function () {
    $("#img4").mouseover(function () {
      $("#imgHidden4").show();
    });
    $("#img4").mouseout(function () {
      $("#imgHidden4").hide();
    });
  });

  $("#img5").hover(function () {
    $("#img5").mouseover(function () {
      $("#imgHidden5").show();
    });
    $("#img5").mouseout(function () {
      $("#imgHidden5").hide();
    });
  });

  $("#img6").hover(function () {
    $("#img6").mouseover(function () {
      $("#imgHidden6").show();
    });
    $("#img6").mouseout(function () {
      $("#imgHidden6").hide();
    });
  });

  $("#img7").hover(function () {
    $("#img7").mouseover(function () {
      $("#imgHidden7").show();
    });
    $("#img7").mouseout(function () {
      $("#imgHidden7").hide();
    });
  });

  $("#img8").hover(function () {
    $("#img8").mouseover(function () {
      $("#imgHidden8").show();
    });
    $("#img8").mouseout(function () {
      $("#imgHidden8").hide();
    });
  });



});


