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
                
            }else if (idade <= 10 && idade < 18){ // JOVEM!
                
            }else if (idade < 50){ // ADULTO!

            }else{ // IDOSO!

            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){  // CRIANÇA!

            }else if (idade <= 10 && idade < 18){ // JOVEM!
                
            }else if (idade < 50){ // ADULTO!

            }else{ // IDOSO!

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com a idade de ${idade} anos`
    }
}