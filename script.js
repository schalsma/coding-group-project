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
    }); 

let modalBtn = document.getElementById("#modal-btn");
 let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function()
{
modal.style.display = "block";
    }
closeBtn.onclick = function(){
      modal.style.display = "none";
    }
window.onclick = function(e){
      if(e.target == modal){
        modal.style.display = "none";
      }
    }

    

// Google Stuff
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
