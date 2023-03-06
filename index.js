const setProperty = (property,value)=>{
    document.documentElement.style.setProperty(property,value)
}

setInterval(() => {
    let date = new Date();

    let hour = 360/12*date.getHours();
    let min = 360/60*date.getMinutes();
    let second = 360/60*date.getSeconds();
    
    setProperty('--hour',`${hour}deg`);
    setProperty('--min',`${min}deg`);
    setProperty('--second',`${second}deg`);
},1000);



