{ 
    {
        {
            { 
                var sera = 'Será' // 4 bloco de código 
                console.log(sera)
            } 
        } 
    } 
} 

console.log(sera)

// a declaração da variavel VAR ela fica visivel para todo o bloco , não se limitando a um bloco de código
// VAR ELA TEM DOIS ESCOPO 

// Outro exemplo

function teste(){  // escopo da função teste
    var local = 123
}

teste()
console.log(local) // aqui vai dar erro, pois necesse caso a variavel local está dentro do escopo da função teste

// resumindo: criar uma variavel com VAR, fora de um função, ela fica visivel para todo código, 
//ser criar uma variavel do tipo VAR em uma função, ela fica limitada SOMENTE NO ESCOPO DA FUNÇÃO
