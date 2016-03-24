$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());


     if (
      ((side1 + side2) < side3 ) || ((side1 + side3) < side2 ) || ((side2 + side3) < side1 )
    ) {
      $("#notATriangle").show();
    } else if ((side1 === side2) && (side1 === side3)) {
      $("#equilateral").show();
    } else if (
      ((side1 === side2) && (side1 !== side3)) || ((side2 === side3) && (side2 !== side1)) || ((side1 === side3) && (side1 !== side2))
    ) {
      $("#isosceles").show();
    } else if (
      ((side1 !== side2) && (side2 !== side3) && (side1 !== side3))
    ) {
      $("#scalene").show();
    }
    else {
      $("#notATriangle").show();
    }

    event.preventDefault();
  });
});
