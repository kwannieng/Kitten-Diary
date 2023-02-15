$(document).ready(function() {

  let todayDate = $('#currentDay');

  displayDate()

  function displayDate() {
    let rightNow = moment().format('MMMM YYYY');
    todayDate.text(rightNow);

    if (rightNow = "February") {
      $(".row-29").addClass("hide")
      $(".row-30").addClass("hide")
      $(".row-31").addClass("hide")
    }

    if (rightNow = "April" || "June" ||"September" ||"November")
    $(".row-31").addClass("hide")
  }

  let string = {
    
  }






})



