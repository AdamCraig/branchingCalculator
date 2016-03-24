var add = function(num1, num2) {
	return num1 + num2;
};
var sub = function(num1, num2) {
	return num1 - num2;
};
var mult = function(num1, num2) {
	return num1 * num2;
};
var div = function(num1, num2) {
	return num1 / num2;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
		event.preventDefault();
    var num1 = parseInt($("#input1").val());
    var num2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + num1);  // for debugging
    console.log("2nd number: " + num2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    var result;
    if (operator === "add") {
      result = add(num1, num2);
    } else if (operator === "subtract") {
      result = sub(num1, num2);
    } else if (operator === "multiply") {
      result = mult(num1, num2);
    } else if (operator === "divide") {
      result = div(num1, num2);
    } else {
			alert("ERROR");
		}
    $("#output").text(result);
  });
});
