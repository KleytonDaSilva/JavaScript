console.log(Math.ceil(6.2))

const obj1={} // objeto

obj1.nome = 'Bola' // nome é o atributo do objeto que chama obj1 

console.log(obj1.nome)


function Obj (nome){ // nome está entrando como parametro
    this.nome = nome // this.nome vou atribuir nome, que ficara visivel para quando criar ou instanciar objeto do tipo OBJ, fica publico
    this.exec = function(){ // função 
        console.log("Exerxer")
    }
}

const obj2 = new Obj("cadeira") // criar const obj2 que recebe Obj que vai ser atribuida para nome no objeto ObJ

console.log(obj2.nome) // imprimindo o obj2 onde foi passado o nome de cadeira para Obj
obj2.exec() // saida da função

// resumindo:  você acessa os membros de um obejto ou funcao apartir de um ponto 