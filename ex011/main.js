function verificar() {
    var txtpais = window.document.getElementById('pais')
    var pais = txtpais.value
    var mensagem = window.document.getElementById('msg')
    mensagem.innerHTML = `<p>Seu país é: <strong>${pais}</strong></p>`
    if (pais == 'Brasil') {
        mensagem.innerHTML += `<p>Você é brasileiro!</p>`
    } else {
        mensagem.innerHTML += `<p>Você é estrangeiro!</p>`
    }
}
