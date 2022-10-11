var adicao = document.getElementById('somar')
adicao.addEventListener('click', somar)

function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    var msg = document.getElementById('msg')
    msg.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}