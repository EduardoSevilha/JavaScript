function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! [ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){  // CRIANÇA!
                img.setAttribute('src', 'imagens/bebeH.png')
            }else if (idade < 21){ // JOVEM!
                img.setAttribute('src', 'imagens/jovemH.png')
            }else if (idade < 50){ // ADULTO!
                img.setAttribute('src', 'imagens/adulto.png')
            }else{ // IDOSO!
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){  // CRIANÇA!
                img.setAttribute('src', 'imagens/bebeM.png')
            }else if (idade < 21){ // JOVEM!
                img.setAttribute('src', 'imagens/jovemM.png')
            }else if (idade < 50){ // ADULTO!
                img.setAttribute('src', 'imagens/adulta.png')
            }else{ // IDOSO!
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com a idade de ${idade} anos`
        res.appendChild(img)
    }
}