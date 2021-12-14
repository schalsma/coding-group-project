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
    
/* popup */
const openModalBtn = document.querySelector(#openModalBtn);
openModalBtn.addEventListener("click",event =>{
    
})

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

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    postAJAX('/server/sign-in', {id_token: id_token});
        .then(function(user) {
            // The user is now signed in on the server too
            // and the user should now have a session cookie
            // for the whole site. 
            document.location.href = '/dashboard/' + user.username
        })
  }