import $ from "jquery";
$(document).ready(function () {
  const firstParagraph = $("<p>").text("ALX Dashboard");
  const secondParagraph = $("<p>").text("Dashboard data for the students");
  const thirdParagraph = $("<p>").text("Copyright - ALX");
  $("body").append(firstParagraph, secondParagraph, thirdParagraph);
});
