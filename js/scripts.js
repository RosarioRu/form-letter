$(document).ready(function() {
    $("#letterForm").submit(function(event) {
      event.preventDefault();
      const nameInput = $("input#name").val();
      $(".name").text(nameInput);
      $("#letter").show();  
    });
});