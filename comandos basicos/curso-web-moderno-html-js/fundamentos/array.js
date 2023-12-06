const valores = [7.7, 8.9,6.3,9.2] // valores fixo!

console.log(valores[0], valores[3])

valores [4] = 10

console.log(valores)
console.log(valores.length)


valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento do array
delete valores[0] // retira o elemento do array que definir entre conchetes 
console.log(valores)