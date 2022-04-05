$(document).ready(function () {
  $("#submit").on("click", function (event) {
    $(this).html("button clicked");
  });
});

// submit <button> is clicked
// variables: name, email, and phone number
// for loop to iterate of the entire required array

var nameId = $("#name");
var emailId = $("#email");
var phoneId = $("#phone");

var required = [nameId, emailId, phoneId];

$(document).ready(function () {
  $("#submit").on("click", function () {
    for (let i = 0; i < required.length; i++) {
      if (required[i].val() == "") {
        alert("Plz fill out the following fields");
        required[i].prev().addClass("warning");
      }

      if (required[i].val() !== "") {
        required[i].prev().removeClass("warning");
      }
      if (!$("label").hasClass("warning")) {
        $("#form").remove();
        $("h2").html("Thank you so much for the feedback!");
        // manipulate the <h2> to say: "Thanks for your feedback!"
      }
    }
  });
});
