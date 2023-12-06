//par nome/valor

const saudacao = 'Ópa!!'  // contexto lexico

function exec(){
    const saudacao = 'Falar ' // Contexto lexico 2
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor

const Cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    emdereco:{
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)



