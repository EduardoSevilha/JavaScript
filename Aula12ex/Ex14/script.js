function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        msg.innerText = 'Bom Dia!'
        document.body.style.background = '#FFE964'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        msg.innerText = 'Boa Tarde!'
        document.body.style.background = '#C8DCE6'
    }else{
        img.src = 'imagens/noite.png'
        msg.innerText = 'Boa Noite!'
        document.body.style.background = '#02306A'
    }
}