// hoisting significa "jogar para cima" 
console.log("############### hoisting com var #################")
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// mesmo com função

function teste1() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

teste1()

console.log("############### hoisting com let #################")
console.log('a = ', a)
let a = 2 // vai dar erro
console.log('a = ', a)