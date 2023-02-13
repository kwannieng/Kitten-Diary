$(document).ready(function() {

    let todayDate = $('#currentDay');
    
    let textbox = [
      $('#textbox1'),
      $('#textbox2'),
      $('#textbox3'),
      $('#textbox4'),
      $('#textbox5'),
      $('#textbox6'), 
      $('#textbox7'),
      $('#textbox8'),
      $('#textbox9'),
      $('#textbox10'),  
      $('#textbox11'),
      $('#textbox12'),
      $('#textbox13'),
      $('#textbox14'),
      $('#textbox15'),
      $('#textbox16'), 
      $('#textbox17'),
      $('#textbox18'),
      $('#textbox19'),
      $('#textbox20'),  
      $('#textbox21'),
      $('#textbox22'),
      $('#textbox23'),
      $('#textbox24'),
      $('#textbox25'),
      $('#textbox26'), 
      $('#textbox27'),
      $('#textbox28'),
      $('#textbox29'),
      $('#textbox30'),
      $('#textbox31'),
    ];
    
    let scheduleDate = [
      $('#1').text(), 
      $('#2').text(), 
      $('#3').text(), 
      $('#4').text(), 
      $('#5').text(), 
      $('#6').text(), 
      $('#7').text(), 
      $('#8').text(), 
      $('#9').text(),
      $('#10').text(),
      $('#12').text(), 
      $('#12').text(), 
      $('#13').text(), 
      $('#14').text(), 
      $('#15').text(), 
      $('#16').text(), 
      $('#17').text(), 
      $('#18').text(), 
      $('#19').text(),
      $('#20').text(),
      $('#21').text(), 
      $('#22').text(), 
      $('#23').text(), 
      $('#24').text(), 
      $('#25').text(), 
      $('#26').text(), 
      $('#27').text(), 
      $('#28').text()
    ]
    
    
    displayDate()
    function displayDate() {
        let rightNow = moment().format('MMMM YYYY');
        todayDate.text(rightNow);
    }
    
    colorTimeblocks ()
    function colorTimeblocks (){
      let currentTime = moment();
      for (index=0; index<scheduleTime.length; index++){  
    
        console.log(scheduleTime[index])
        console.log(currentTime)
    
        if ( currentTime.valueOf() > scheduleDate[index].valueOf() ) {
          textbox[index].removeClass("present")
          textbox[index].addClass("past")
        } else if ( currentTime < scheduleTime[index] ) {
          textbox[index].addClass("future")
        } else {
          textbox[index].removeClass("future")
          textbox[index].addClass("present")
        }
      }
    }
    
    
    
    $(".saveBtn").on("click", function(){
    
      let date = $(this).siblings(".day").children().attr("id");
      let myEvent = $(this).siblings(".description").val();
      localStorage.setItem(date,myEvent);
    
    })
    
    
    $("#textbox1").val(localStorage.getItem("1"))
    $("#textbox2").val(localStorage.getItem("2"))
    $("#textbox3").val(localStorage.getItem("3"))
    $("#textbox4").val(localStorage.getItem("4"))
    $("#textbox5").val(localStorage.getItem("5"))
    $("#textbox6").val(localStorage.getItem("6"))
    $("#textbox7").val(localStorage.getItem("7"))
    $("#textbox8").val(localStorage.getItem("8"))
    $("#textbox9").val(localStorage.getItem("9"))
    $("#textbox9").val(localStorage.getItem("10"))
    $("#textbox1").val(localStorage.getItem("11"))
    $("#textbox2").val(localStorage.getItem("12"))
    $("#textbox3").val(localStorage.getItem("13"))
    $("#textbox4").val(localStorage.getItem("14"))
    $("#textbox5").val(localStorage.getItem("15"))
    $("#textbox6").val(localStorage.getItem("16"))
    $("#textbox7").val(localStorage.getItem("17"))
    $("#textbox8").val(localStorage.getItem("18"))
    $("#textbox9").val(localStorage.getItem("19"))
    $("#textbox9").val(localStorage.getItem("20"))
    $("#textbox1").val(localStorage.getItem("21"))
    $("#textbox2").val(localStorage.getItem("22"))
    $("#textbox3").val(localStorage.getItem("23"))
    $("#textbox4").val(localStorage.getItem("24"))
    $("#textbox5").val(localStorage.getItem("25"))
    $("#textbox6").val(localStorage.getItem("26"))
    $("#textbox7").val(localStorage.getItem("27"))
    $("#textbox8").val(localStorage.getItem("28"))    
    $("#textbox8").val(localStorage.getItem("29"))
    $("#textbox8").val(localStorage.getItem("30"))
    $("#textbox8").val(localStorage.getItem("31"))
    
    
    })