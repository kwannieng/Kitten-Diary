$( document ).ready(function() {
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
    

renderUserProfile()
    
    // Save function to store user input in local storage and paste in the new <p>
    function renderUserProfile(){
        myName.text("Name: " + localStorage.getItem("Name"));
        myBreed.text("Breed: " + localStorage.getItem("Breed"));
        myDOB.text("Date of Birth: " + localStorage.getItem("Date of Birth"))
        instagram = localStorage.getItem("instagram")
        $("a").attr("href", "https://www.instagram.com/" + instagram);
        $("a").attr("target", "blank");
    }
    })