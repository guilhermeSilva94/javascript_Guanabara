function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var msg = document.getElementById('msg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        msg.innerHTML = `<p>Impossível contar!</p>`
    } else {
        msg.innerHTML = `<p>Contando: </p>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                msg.innerHTML += `<p>${c}</p>`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += `<p>${c}</p>`
            }
        }
    }

}
