
console.log('################## for usando var ############')// Usando loop com var - primeira aula
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log(' i = ', i)


console.log('################## for usando let ############')// Usando loop com let - segunda aula

for (let j = 0; j < 10; j++){
    console.log(j)
}
//console.log('j = ', j) // aqui vai dar erro pois, variavel I está com o tipo let que está dentro do escopo for


console.log('##################  usando array com var no loop ############')// Usando loop/array com var - terceira aula

const funcs = []

for(var k = 0; k < 10; k++){
    funcs.push(function(){ // usando a variavel funcs, crio um função sem nome
        console.log(k)
    })
}

funcs[2]()
funcs[8]()


console.log('##################  usando array com let no loop ############')// Usando loop/array com var - quarta aula

const funcs1 = []

for(let y = 0; y < 10; y++){
    funcs1.push(function(){ // usando a variavel funcs, crio um função sem nome
        console.log(y)
    })
}

funcs1[2]()
funcs1[8]()