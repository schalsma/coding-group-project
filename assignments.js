let Level = document.querySelector("#Level");

Level.addEventListener("change", event => {
    let selectedValue = event.currentTarget.value;

    if(selectedValue == "Difficult"){
        Level.classList.add("#Level.special");
    }else{
        Level.classList.remove("#Level.special");
    }
})
    
