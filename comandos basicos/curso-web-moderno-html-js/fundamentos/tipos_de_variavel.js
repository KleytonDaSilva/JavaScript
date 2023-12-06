// number

const peso1 = 1;
const peso2 = Number("2.0");

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isSafeInteger(peso2))

const avaliacao1 =  9.87;
const avaliacao2 = 6.76;

const total =  avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total /(peso1 + peso2);


console.log(media.toFixed(2)) // toFixed = define o número de casa decimais 
console.log(media.toString(2))// passando o valor de media em binario


console.log("############################################# Math ###########################");

const raio = 5.6
const area = Math.PI * Math.pow(raio,2);


console.log(area)
console.log(typeof Math)


console.log("########################## String ######################## ");

const escola = "Cod3r";

console.log(escola.charAt(3)); // charAt retorna a letra no indice 3, ou seja, na terceira letra da palavra 
console.log(escola.charCodeAt(3)); // charCodeAt vai retornar a letra na posição 3 com o valor da tabela ASCII  
console.log(escola.indexOf(3)) // vai retorna o indece da letra
console.log(escola.substring(1)); // vai retonar a palavra sem a primeira letra 
console.log(escola.substring(0,3)); //  vai retonar a palavrar com as três primeiras letras
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3 , "e")); // susbstitui a letra do indeci 3 para letra 'e''
console.log("Maria, Biatriz,Amanda, Kleyton " .split(',')); // trasforma as palavras em um array



console.log("################ template String ###########");

const nome = 'Kleyton';
const concatenacao = 'Olá ' + nome + '!';

// ou template

const template = `
        Olá
        ${nome} !`;

console.log(concatenacao + template)

// Expressões ...

console.log(`1 + 1 = ${ 1 + 1} `)

const up = texto => texto.toUpperCase();
console.log(`Ei ... ${up('cuidado')} !`)