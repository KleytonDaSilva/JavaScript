// primeira aula de função, função sem retorno


console.log("################# Função sem retorno ###############")
function imprimirSoma(a , b) {  // A e B são parametros de entrada
console.log ( a + b)

}
imprimirSoma( 2 ,3) // chamando a função imprimirSoma ( 2 , 3) o 2 e 3 são as variaveis A e B do meu parametros
imprimirSoma(2) // não traz resultado pq faltou o valor de B 


console.log("################# Função com retorno ###############")

// função com retorno

function soma ( a, b=0 ){  // aqui está sendo passado dos parametros , A e B, o B recebe o valor de zero caso não recebe nenhum valor 

    return a  + b;// aqui não estou chamando um console.log, estou retornando para imprimiro valor, deve ser criado o console.log fora da função

}
console.log(soma(1,3)) // criando console.log para imprimr o resultado fora da função
console.log(soma(2)) // retorna dois por o valor de B é fixo como zero



console.log("################# Transformando um função em variavel ###############") // segunda aula de função, transforma um função em variavel 
// aramazenando uma função em uma variavel 

const imprimirSoma1 = function (a , b){ // javascript pode criar uma variavel em função , const imprimirSoma é a variavel que recebe uma função FUNCTION sem nome com os parametros A e B
        console.log(a + b) // função sem retorno 
}

imprimirSoma1( 2, 3)


console.log("################# função arrow ###############") // Armazenando um fução arrow em uma variavel

const soma1 = (a , b) => {  // => forma de função reduzida 

        return a  +  b

}

console.log(soma1(2,3))

console.log("################# Retorno implícito ###############") // retorno implícito serve quando uma função tem apenas uma linha de código, função simples
const subtracao = (a , b ) => a - b
console.log(subtracao(2,3))

const imprimir2  = a => console.log(a)

imprimir2('Legal !!!')