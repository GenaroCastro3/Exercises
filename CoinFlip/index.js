function flip(){
    return Math.random() >= 0.5
}

function randomNumber(n){

    if(n < 0 || n >= 1000000) 
        throw "Error"
    numberRnd = 0;
    for(i=1; i < n; i++)
        if(flip()) numberRnd++
        
    return numberRnd
}