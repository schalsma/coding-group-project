const localStorageAssignment = localStorage.getItem("myAssignment");

    if(localStorageAssignment == "apple"){
        console.log("You may enter");
    }else{
        console.log("Goodbye")
    }

const letData_btn = <document.querySelector("#setData_btn");
const assignment_txt = <document.querySelector("#assignment_txt");

    setData_btn.addEventListener("click", event => {
        localStorage.setItem("myAssignment", assignment_txt.value);
        location.href = "getLms.html";
    })   