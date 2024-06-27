var agora = new Date()
var diaSen = agora.getDay()
 
/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

    PARA O JAVASCRIPT!!!
*/

// console.log(diaSen)

switch(diaSen){
    case 0:
        console.log('Hoje é Domingo.')
        break
    case 1:
        console.log('Hoje é Segunda.')
        break
    case 2: 
        console.log('Hoje é Terça.')
        break
    case 3:
        console.log('Hoje é quarta.')
        break
    case 4: 
        console.log('Hoje é quinta.')
        break
    case 5:
        console.log('Hoje é sexta.')
        break
    case 6:
        console.log('Hoje é sábado.')
    default:
        console.log('[ERRO]')
        break
}