function verificar() {
    var data = new Date()
    var fano = data.getFullYear()
    var anoNascimento = document.getElementById('ano')
    var resposta = document.getElementById('resposta')
    if (anoNascimento.value.length == 0 || anoNascimento.value > fano) {
        window.alert('erro')
    } else {
        var genero = document.getElementsByName('genero')
        var idade = fano - Number(anoNascimento.value)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        var respostaGenero = ''
        if (genero[0].checked) {
            respostaGenero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancaM.jpg')
            } else if (idade >= 10 && idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultoH.jpg')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'img/idosoM.jpg')
            }
        } else {
            respostaGenero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancaF.jpg')
            } else if (idade >= 10 && idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovemF.jpg')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultaF.jpg')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'img/idosoF.jpg')
            }
        }
        resposta.innerHTML = `Detectamos ${respostaGenero} com ${idade} anos.`
        resposta.appendChild(img)
    }
}