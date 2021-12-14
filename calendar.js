// PART 1 - Authorization and login.

// Global variables, the values come from the Developer Console
// Put your OWN clientID and apiKey
var clientId = '903874887931-depq8q79cg0n8gk6sajkdtn2qee3m9hk.apps.googleusercontent.com';
var apiKey = 'AIzaSyCE-mX4Xwe_E6cXd5c_17IlRcFJlXjYPng';
var scopes = 'https://www.googleapis.com/auth/calendar';
      
      
/* Function invoked when the client javascript library is loaded */
function handleClientLoad() {
  console.log("Inside handleClientLoad ...");
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,100);
}

/* API function to check whether the app is authorized. */
function checkAuth() {
  console.log("Inside checkAuth ...");
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, 
                      handleAuthResult);
}

/* Invoked by different functions to handle the result of authentication checks.*/
function handleAuthResult(authResult) {
    console.log("Inside handleAuthResult ...");
    var authorizeButton = document.getElementById('authorize-button');
    var addButton = document.getElementById('addToCalendar');
    if (authResult && !authResult.error) {
          authorizeButton.style.visibility = 'hidden';
          addButton.style.visibility = 'visible'; 
          //load the calendar client library
          gapi.client.load('calendar', 'v3', function(){ 
            console.log("Calendar library loaded.");
          });
    } else {
          authorizeButton.style.visibility = '';
          authorizeButton.onclick = handleAuthClick;
        }
}

/* Event handler that deals with clicking on the Authorize button.*/
function handleAuthClick(event) {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, 
                        handleAuthResult);
    return false;
}

/* End of PART 1 - Authentication Process. */   