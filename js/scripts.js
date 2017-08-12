$(document).ready(function() {
  $("form#track").submit(function(event) {

    var quest1 = $("#quest1").val();
    var quest2 = $("#quest2").val();
    var quest3 = $("#quest3").val();
    var quest4 = $("#quest4").val();
    var quest5 = $("#quest5").val();

    if (quest1 === "Yes" && quest2 === "No" && quest3 === "No" && quest4 === "No" && quest5 ==="No") {
       $("#Ruby").show();
    }  else if (quest1 === "No" && quest2 === "Yes" && quest3 === "No" && quest4 === "Yes" && quest5 === "No") {
       $("#PHPDrupal").show();
    }  else {
    $("#JavaAdroid").show();
    }
    event.preventDefault();

  });
});
