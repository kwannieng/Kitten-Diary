$(document).ready(function() {

  let thisMonth = $('#currentMonth');
  let firstMonth = ""
  firstMonth = localStorage.getItem("Date of Birth")
  console.log(firstMonth)

  displayMonth()

  function displayMonth() {
    thisMonth.text(moment(firstMonth).add(2, "months").format("MMMM YYYY"));
    
    let thisMonthText = moment(firstMonth).add(2, "months").format("MMMM");
    if (thisMonthText === "February") {
      $(".card-29").addClass("hide")
      $("card-30").addClass("hide")
      $(".card-31").addClass("hide")
    }

    if (thisMonthText === "April"){
      $(".card-31").addClass("hide")
    } 
    
    if (thisMonthText === "June"){
      $(".card-31").addClass("hide")
    } 
    
    if (thisMonthText === "September"){
      $(".card-31").addClass("hide")
    }
    
    if (thisMonthText === "November"){
      $(".card-31").addClass("hide")
    }
  }


  $(function() {
    $('a[data-modal]').on('click', function() {
      $($(this).data('modal')).modal();
      return false;
    });
  });

$('a.open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });
  


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

localStorage.setItem("Weight3", JSON.stringify(weight))
localStorage.setItem("Body3", JSON.stringify(long))
localStorage.setItem("Notes3", JSON.stringify(notes))
}
}

let localWeightArray
let localWeightData = ""
let localBodyArray
let localBodyData = ""
let localNotesArray
let localNotesData = ""

renderData()

function renderData (){
  localWeightArray = JSON.parse(localStorage.getItem("Weight3"))
  localBodyArray = JSON.parse(localStorage.getItem("Body3"))
  localNotesArray = JSON.parse(localStorage.getItem("Notes3"))

  weightInput = [ 
    $("#weight-1"), $("#weight-2"), $("#weight-3"), $("#weight-4"), $("#weight-5"),  
    $("#weight-6"), $("#weight-7"), $("#weight-8"), $("#weight-9"), $("#weight-10"),
    $("#weight-11"), $("#weight-12"), $("#weight-13"), $("#weight-14"), $("#weight-15"),  
    $("#weight-16"), $("#weight-17"), $("#weight-18"), $("#weight-19"), $("#weight-20"),
    $("#weight-21"), $("#weight-22"), $("#weight-23"), $("#weight-24"), $("#weight-25"),  
    $("#weight-26"), $("#weight-27"), $("#weight-28"), $("#weight-29"), $("#weight-30"),
    $("#weight-31")
  ]
  
  bodyInput = [ 
    $("#body-1"), $("body-2"), $("#body-3"), $("#body-4"), $("#body-5"),  
    $("#body-6"), $("#body-7"), $("#body-8"), $("#body-9"), $("#body-10"),
    $("#body-11"), $("#body-12"), $("#body-13"), $("#body-14"), $("#body-15"),  
    $("#body-16"), $("#body-17"), $("#body-18"), $("#body-19"), $("#body-20"),
    $("#body-21"), $("#body-22"), $("#body-23"), $("#body-24"), $("#body-25"),  
    $("#body-26"), $("#body-27"), $("#body-28"), $("#body-29"), $("#body-30"),
    $("#body-31")
  ]
  
  notesInput = [ 
    $("#textbox1"), $("#textbox2"), $("#textbox3"), $("#textbox4"), $("#textbox5"),  
    $("#textbox6"), $("#textbox7"), $("#textbox8"), $("#textbox9"), $("#textbox10"),
    $("#textbox11"), $("#textbox12"), $("#textbox13"), $("#textbox14"), $("#textbox15"),  
    $("#textbox16"), $("#textbox17"), $("#textbox18"), $("#textbox19"), $("#textbox20"),
    $("#textbox21"), $("#textbox22"), $("#textbox23"), $("#textbox24"), $("#textbox25"),  
    $("#textbox26"), $("#textbox27"), $("#textbox28"), $("#textbox29"), $("#textbox30"),
    $("#textbox31")
  ]

  for (x = 0; x<n; x++){
    let number = ""
    number = "d"+[x+1]

    localWeightData = localWeightArray[number]
    localBodyData = localBodyArray[number]
    localNotesData = localNotesArray[number]
  
    if (localWeightData !== ""){
       weightInput[x].val(localWeightData)
      }

    if (localBodyData !== ""){    
      bodyInput[x].val(localBodyData)
      }

   if (localNotesData !== "Notes: "){ 
      notesInput[x].val(localNotesData)
      }
  }
}

})



