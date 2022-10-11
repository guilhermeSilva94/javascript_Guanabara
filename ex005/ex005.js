window.document.write('<br>Olá, Mundo!<br>')
window.document.write(window.document.charset)
window.document.write('<br>' + window.navigator.appName + '<br>')
window.document.write(window.document.URL)

/* Por Marca = getElementsByTagName('nome da tag')*/
var p1 = window.document.getElementsByTagName('p')[0]
//window.document.write('<br>Está escrito assim: ' + p1.innerText)
p1.style.color = 'blue'

var p2 = window.document.getElementsByTagName('p')[1]
window.document.write('<br>' + p2.innerHTML)

var corpo = window.document.body
corpo.style.background = 'black'

/* Por ID = getElementsById() */
var d = window.document.getElementById('msg')
d.style.background = 'green'
//d.innerText = 'Alterando o conteúdo da div'
window.document.getElementById('msg').innerText = 'Alterando o conteúdo da div'

/* Por Nome = getElementsByName() */
/* Por Classe = getElementsByClassName() */

/* Por Seletor = querySelector() */
var x = window.document.querySelector('div#msg')
d.style.padding = '50px'

