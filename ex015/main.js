function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p id="texto">Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = 'orange'
        img.src = 'img/manha.png'
        img.alt = 'Foto Período Manhã'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = 'darkgreen'
        img.src = 'img/tarde.png'
        img.alt = 'Foto Período Tarde'
    } else {
        document.body.style.background = 'black'
        img.src = 'img/noite.png'
        img.alt = 'Foto Período Noite'
    }
}
