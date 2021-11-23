const localStorageMessage = localStorage.getItem("myMessage");

    if(localStorageMessage == "apple"){
        console.log("You may enter");
    }else{
        console.log("Goodbye")
    }

const setData_btn = <document.querySelector("#setData_btn");
const message_txt = <document.querySelector("#message_txt");

    setData_btn.addEventListener("click", event => {
        localStorage.setItem("myMessage", message_txt.value);
        location.href = "getLocalStorage.html";
    })   