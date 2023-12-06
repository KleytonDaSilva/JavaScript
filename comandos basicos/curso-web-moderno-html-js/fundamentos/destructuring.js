console.log("------------  destructuring aula 01 ------------")

const pessoa = { // objeto
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: 'Rua abc',
        numero: 2123
    }
}

//objeto acima pessoa, agora o processo de tirar 

const{nome, idade } = pessoa // {} sigfinica retirar, estamos retirando os atributos nome e idade do objeto pessoa 

console.log(nome , idade)


console.log("------------  destructuring aula 02 - array ------------")

const [a] =[10]
console.log(a)


const [n1, , n3, , n5, n6=0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const[, [,nota]] = [[,8,8], [9,6,8]]
console.log(nota)

console.log("------------  destructuring aula 03 ------------")

function rand ({min =0, max = 1000}){
const valor = Math.random() * (max - min) + min
return Math.floor(valor)
}

const obj5  = { max: 50 , min:40}
console.log(rand(obj5))
console.log(rand({min: 985}))


console.log("------------  destructuring aula 04 - array ------------")

function rand1([min= 0, max = 1000]){
    if(min > max ) [ min ,max] = [max , min]
    const valor1 = Math.random() * (max - min) + min
    return Math.floor(valor1)
}

console.log(rand1([50, 40]))
console.log(rand1([992]))
console.log(rand1([,10]))