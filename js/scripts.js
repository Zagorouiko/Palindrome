var palindrome = function(string) {
  if (string === (string.split("").reverse().join(""))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var user_input = ($("input#user_input").val());
    var result = palindrome(user_input);
    $("span.result").text(result)
    $("#result").show();
    event.preventDefault();
  });
});
