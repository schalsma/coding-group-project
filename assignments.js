let Levels = document.querySelectorAll(".Level");

    for(let x=0; x <Levels.length; x++){
        Levels[x].addEventListener("change", event => {
            let selectedValue = event.currentTarget.value;
        
            if(selectedValue == "Difficult"){
                event.currentTarget.classList.add("special");
            }else{
                event.currentTarget.classList.remove("special");
            }
        }) 

    }


   



    
