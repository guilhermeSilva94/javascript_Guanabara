function verificar() {
    var txtvelocidade = window.document.getElementById('txtvelocidade')
    var velocidade = Number(txtvelocidade.value)
    var mensagem = window.document.getElementById('msg')
    mensagem.innerHTML = `<p>Sua velocidade atual é de ${velocidade}Km/h.</p>`
    mensagem.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    if (velocidade > 80) {
        mensagem.innerHTML += `<p>Você está MULTADO por excesso de velocidade`
    }
}
