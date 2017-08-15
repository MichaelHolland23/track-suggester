$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var quest1 = parseInt($("#quest1").val());
    var quest2 = parseInt($("#quest2").val());
    var quest3 = parseInt($("#quest3").val());
    var quest4 = parseInt($("#quest4").val());
    var quest5 = parseInt($("#quest5").val());

    if (quest1 === 1 && quest2 === 2 && quest3 === 2 && quest4 === 2 && quest5 === 2) {
      $("#Ruby").show();
    } else if (quest1 === 2 && quest2 === 1 && quest3 === 1 && quest4 === 1 && quest5 === 1) {
      $("#PHPDrupal").show();
    } else {
      $("#JavaAndroid").show();
    }

  });
});
