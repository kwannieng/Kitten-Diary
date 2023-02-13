$( document ).ready(function() {
let submitButton = $(".submitButton");
let kittenName = "";
let kittenBreed = "";
let kittenDOB = ""; 
let instagram = "";
let kittenData = $(".myKittenData")

//Create new <p> to contain the user input

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

//listen to the button click and trigger the save function

submitButton.on("click", function(event){
    event.preventDefault()
    saveKittenData()
})

// Save function to store user input in local storage and paste in the new <p>
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

// unhide the profile with user input and hide the profile for inputting data
    newKittenProfile.addClass("hide");
    myKittenProfile.removeClass("hide");
}


// let api_key = "live_xZy4oNEjjSaD6NEmxUUTVWB3jQv0eXNOtyjyOPuaBXS1Ot1qSVSKcgIPbF9Jh9yE"
// let queryURL = "https://api.thecatapi.com/v1/images/search?limit=12" + api_key;

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//         // Log the queryURL
//       console.log(queryURL);
//         // Log the resulting object
//       console.log(response);

//       let imageURL = response.url;

      

//     // imagesData.map(function(imageData) {
    
//     let image = $(".catImage");
//     // //use the url from the image object
//      image.attr("src", imageURL) ;
        
//      let imageDiv = $(".monthBox")
//     imageDiv.append(image)    
//      });
})


