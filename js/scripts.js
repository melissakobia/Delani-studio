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






