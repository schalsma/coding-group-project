/*  
const localStorageAssignment = localStorage.getItem("myAssignment");
    
if(localStorageAssignment == "apple"){
        console.log("You may enter");
    }else{
        console.log("Goodbye")
    }
*/
const letData_btn = <document.querySelector("#setData_btn");
const assignment_txt = <document.querySelector("#assignment_txt");

    setData_btn.addEventListener("click", event => {
        localStorage.setItem("myAssignment", assignment_txt.value);
        location.href = "getLms.html";
    }) 
    
$(‘#Todo’).load(‘assignments.html #homework’);


/* popup */
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
