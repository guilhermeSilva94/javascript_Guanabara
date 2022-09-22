//Selecionando o Body no HTML(window.document.body);
var corpo = window.document.body;
corpo.style.background = 'green'; // trocou a cor de fundo

//Selecionando uma tag no HTML(getElementsByTagName()), como tem dois paragrafos, utiliza o indice dentro de colchetes para selecionar;
var p1 = window.document.getElementsByTagName('p')[0];
p1.style.color = 'black'; //trocou a cor da fonte

//Selecionando uma ID no HTML(getElementsById());
var mensagem = window.document.getElementById('msg');
mensagem.style.background = 'blue'; //trocou a cor de fundo
mensagem.innerText = 'Olá';//trocou o conteudo escrito 

//Selecionando pela propriedade Name no HTML(getElementsByName());
//Selecionando pela classe no HTML(getElementsByClassName());

//Selecionar por seletor no HTML(querySelector() ou querySelectoAll);






