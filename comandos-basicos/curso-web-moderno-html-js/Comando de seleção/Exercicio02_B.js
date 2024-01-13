var a = 3;
var b = 4;
var c = 9;
var max;

if(a > b && a > c){
    max = a;
}else if(b > c && b > a){
    max = b;
}else if(c > a && c > b){
    max = c;
}

console.log(max);