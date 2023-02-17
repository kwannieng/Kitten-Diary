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

let n = $('#monthlyCalendar .date-block').length

let weight ={
  d1:"", d2:"", d3:"", d4:"", d5:"", d6:"", d7:"", d8:"", d9:"", d10:"", 
  d11:"", d12:"", d13:"", d14:"", d15:"", d16:"", d17:"", d18:"", d19:"", d20:"",
  d21:"", d22:"", d23:"", d24:"", d25:"", d26:"", d27:"", d28:"", d29:"", d30:"",
  d31:""}

let long = {
  d1:"", d2:"", d3:"", d4:"", d5:"", d6:"", d7:"", d8:"", d9:"", d10:"", 
  d11:"", d12:"", d13:"", d14:"", d15:"", d16:"", d17:"", d18:"", d19:"", d20:"",
  d21:"", d22:"", d23:"", d24:"", d25:"", d26:"", d27:"", d28:"", d29:"", d30:"",
  d31:""}

let notes = {
  d1:"", d2:"", d3:"", d4:"", d5:"", d6:"", d7:"", d8:"", d9:"", d10:"", 
  d11:"", d12:"", d13:"", d14:"", d15:"", d16:"", d17:"", d18:"", d19:"", d20:"",
  d21:"", d22:"", d23:"", d24:"", d25:"", d26:"", d27:"", d28:"", d29:"", d30:"",
  d31:""}

let weightInput
let bodyInput
let notesInput
let localStorageData



$(".saveBtn").on("click", function(event){
  event.preventDefault()
  weightInput = [ 
    $("#weight-1").val(), $("#weight-2").val(), $("#weight-3").val(), $("#weight-4").val(), $("#weight-5").val(),  
    $("#weight-6").val(), $("#weight-7").val(), $("#weight-8").val(), $("#weight-9").val(), $("#weight-10").val(),
    $("#weight-11").val(), $("#weight-12").val(), $("#weight-13").val(), $("#weight-14").val(), $("#weight-15").val(),  
    $("#weight-16").val(), $("#weight-17").val(), $("#weight-18").val(), $("#weight-19").val(), $("#weight-20").val(),
    $("#weight-21").val(), $("#weight-22").val(), $("#weight-23").val(), $("#weight-24").val(), $("#weight-25").val(),  
    $("#weight-26").val(), $("#weight-27").val(), $("#weight-28").val(), $("#weight-29").val(), $("#weight-30").val(),
    $("#weight-31").val()
  ]
  
  bodyInput = [ 
    $("#body-1").val(), $("body-2").val(), $("#body-3").val(), $("#body-4").val(), $("#body-5").val(),  
    $("#body-6").val(), $("#body-7").val(), $("#body-8").val(), $("#body-9").val(), $("#body-10").val(),
    $("#body-11").val(), $("#body-12").val(), $("#body-13").val(), $("#body-14").val(), $("#body-15").val(),  
    $("#body-16").val(), $("#body-17").val(), $("#body-18").val(), $("#body-19").val(), $("#body-20").val(),
    $("#body-21").val(), $("#body-22").val(), $("#body-23").val(), $("#body-24").val(), $("#body-25").val(),  
    $("#body-26").val(), $("#body-27").val(), $("#body-28").val(), $("#body-29").val(), $("#body-30").val(),
    $("#body-31").val()
  ]
  
  notesInput = [ 
    $("#textbox1").val(), $("#textbox2").val(), $("#textbox3").val(), $("#textbox4").val(), $("#textbox5").val(),  
    $("#textbox6").val(), $("#textbox7").val(), $("#textbox8").val(), $("#textbox9").val(), $("#textbox10").val(),
    $("#textbox11").val(), $("#textbox12").val(), $("#textbox13").val(), $("#textbox14").val(), $("#textbox15").val(),  
    $("#textbox16").val(), $("#textbox17").val(), $("#textbox18").val(), $("#textbox19").val(), $("#textbox20").val(),
    $("#textbox21").val(), $("#textbox22").val(), $("#textbox23").val(), $("#textbox24").val(), $("#textbox25").val(),  
    $("#textbox26").val(), $("#textbox27").val(), $("#textbox28").val(), $("#textbox29").val(), $("#textbox30").val(),
    $("#textbox31").val()
  ]
saveData()
})


function saveData(){  
  for (i = 0; i<n; i++){
    let number = ""
    number = "d"+[i+1]
    console.log(number)

    weight[number] = weightInput[i]
    long[number] = bodyInput[i]
    notes[number] = notesInput[i]

localStorage.setItem("Weight", JSON.stringify(weight))
localStorage.setItem("Body", JSON.stringify(long))
localStorage.setItem("Notes", JSON.stringify(notes))
}
}

function renderData (){

  for (i = 0; i<n; i++){
    let number = ""
    number = "d"+[i+1]
    localStorageData = JSON.parse(localStorage.getItem("Weight"))
    console.log(localStorageData[number])

    if (localStorageData[number] !== null){
     weightInput[i] = localStorageData[number]
   }
  }
}



// userWeight= this.$('#weight').text

// JSON.parse(localStorage.getItem("Weight"))
// JSON.parse(localStorage.getItem("Body"))



})



