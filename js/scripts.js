
// Business (or back-end) logic:

  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

// Everything below this line is uses interface (or front-end) logic:

$(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output1").text(result);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });


  // var number1 = parseInt(("Enter a number:"));
  // var number2 = parseInt(("Enter another number:"));
  // var result = subtract(number1, number2);
  //
  // var number1 = parseInt(("Enter a number:"));
  // var number2 = parseInt(("Enter another number:"));
  // var result = divide(number1, number2);
  //
  // var number1 = parseInt(("Enter a number:"));
  // var number2 = parseInt(("Enter another number:"));
  // var result = multiply(number1, number2);
});
