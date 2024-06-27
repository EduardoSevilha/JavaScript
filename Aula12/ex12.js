var agora = new Date()          // PARA PEGAR A HORA DO SISTEMA!!
var hora = agora.getHours()     // É A JUNÇÃO DOS DOIS!!
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else if(hora <= 23){
    console.log('Boa noite!')
}