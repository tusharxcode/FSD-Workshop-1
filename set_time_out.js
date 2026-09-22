let count  =1
let timer=setInterval(()=>{
    console.log(count);
    count++;
    if(count=6){
        clearInterval(timer);
    } 
},1000);