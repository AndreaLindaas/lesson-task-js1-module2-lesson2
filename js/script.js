const button = document.querySelector("button");
const count = document.querySelector(".count");
let counter = 0;


button.onclick = function(){
    button.disabled = true;  
    let countInterval = setInterval(function(){
       
        counter+=1;
        count.innerHTML = counter;
        
       

        if(counter === 7){
           
            button.disabled = false;
            clearInterval(countInterval);

        }


    }, 500);

}
