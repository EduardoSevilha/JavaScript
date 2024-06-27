var idade = 788
console.log(`Você tem ${idade} anos de idade.`)
if(idade < 16){
    console.log('Você não vota!')
} else{
    if(idade >= 16 && idade < 18 || idade > 65){
        console.log('O seu voto é opcional!')
    } else{
        console.log('O seu voto é obrigatorio!')
    }
}


// PODE USAR TAMBÉM!!

/*

var idade = 55
console.log(`Você tem ${idade} anos de idade.`)
if(idade < 16){
    console.log('Não vota!')
} else if(idade < 18 || idade > 65){
    console.log('O seu voto é opcional!!')
} else{
    console.log('O seu voto é obrigatorio!')
}

*/