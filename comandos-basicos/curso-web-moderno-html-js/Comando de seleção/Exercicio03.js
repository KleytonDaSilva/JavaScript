var a = 4
var b =  9
var c = 7
var max, med1, med2, pondereada


if( a > b){
    if( a > c){
         max = a;
         med1 = b;
         med2 = c;
    }else{
        max = c;
        med1 = b;
        med2 = a;
    }
}else{
    if(b > c){
        max = b;
        med1 = a;
        med2 = c;
    }else{
        max = c;
        med1 = b;
        med2 = a;
    }
}

podenrada = (max * 5 +med1* 2.5 +med2 * 2.5) / 10;

console.log("Maior nota: " + max);
console.log("Media ponderada: " + podenrada);