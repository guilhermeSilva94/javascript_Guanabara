var nome = window.prompt('Qual é o seu nome?');

//Formatando Strings
// conta quantos caracteres tem em uma string
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br/>`);
// coloca todas as letras em maiúsculas
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br/>`);
// colocatodas as letras em minúsculas
document.write(`Seu nome em letras minúsculas é ${nome.toLowerCase()}<br/><br/><br/>`);

/*
Formatando Números
  deixar o número com duas casas decimais = .toFixed(2);
  trocar o . pela , = .replace("." , ",");
  tranformar número em moedas regionais:
  .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  .toLocaleString('pt-BR', {style: 'currency', currency: 'USD'});
  .toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
*/



