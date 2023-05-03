function countdown(num){
    let timer = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(timer)
            console.log("DONE!")
        }
        else{
            console.log(num)
        }
    
    },1000)
}


function randomGame(){
    let num= 0;
    let counter= 0;
    let timer= setInterval(function(){
        num = Math.random();
        counter++
        if(num > .75){
            clearInterval(timer);
            console.log(`it took ${counter} attempts`)
        }
    },1000)
}