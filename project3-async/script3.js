//generate a random colors
const randomColors = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    } 
    return color;
}
let intervalId; //for stop the bg color 

//changin bg color 
const startChangingColor = function(){

    //check condition-: //optimise
    // if(!intervalId){
    //     intervalId = setInterval(changeBgColor, 1000);   
    // }
    
    intervalId = setInterval(changeBgColor, 1000);
    function changeBgColor(){
        document.body.style.backgroundColor = randomColors();
    }
}

//stop bg color
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; //optimise 
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)