var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerHTML = 'Entrou!'
    a.style.background = 'blue'
    a.style.cursor = 'pointer'
}

function sair() {
    a.innerHTML = 'Saiu!'
    a.style.background = 'green'
}

