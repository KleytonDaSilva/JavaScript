var a = 3;
var b = 4;
var c = 9;
var max;

if( a > b){
    if(a > c){
        max = a;
    }else{
        max = c;
    }  
}else{
    if(b >c ){
        max  = b;
    }else{
        max = c;
    }
}
console.log(max);