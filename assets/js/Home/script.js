$( document ).ready(function() {

$("#name").css("broder", "red")

let submitButton = $(".submitButton");
let kittenName = "";
let kittenBreed = "";
let kittenDOB = ""; 
let instagram = "";
let kittenData = $(".myKittenData")

let myName = $("<p>").addClass("myName");
let myBreed = $("<p>").addClass("myBreed");
let myDOB = $("<p>").addClass("myDOB");
let myinsta = $(".myInsta");

kittenData.append(myName)
kittenData.append(myBreed)
kittenData.append(myDOB)
kittenData.append(myinsta)

let myKittenProfile = $(".myKittenProfile")
let newKittenProfile =$(".newKittenProfile")

submitButton.on("click", function(event){
    event.preventDefault()
    saveKittenData()
})


function saveKittenData(){
    kittenName = $("#name").val();
    kittenBreed = $("#breed").val();
    kittenDOB = $("#dOB").val();
    console.log("#dOB")
    instagram = $("#instagram").val();

    localStorage.setItem("Name", kittenName)
    localStorage.setItem("Breed", kittenBreed)
    localStorage.setItem("Date of Birth", kittenDOB)
    if (instagram !== null) {
        localStorage.setItem("instargam", instagram);
        $("a").attr("href", "https://www.instagram.com/" + instagram);
        $("a").attr("target", "blank");
        myinsta.removeClass("hide")
        }    
    myName.text("Name: " + localStorage.getItem("Name"));
    myBreed.text("Breed: " + localStorage.getItem("Breed"));
    myDOB.text("Date of Birth: " + localStorage.getItem("Date of Birth"))
    
    newKittenProfile.addClass("hide");
    myKittenProfile.removeClass("hide");
}

})