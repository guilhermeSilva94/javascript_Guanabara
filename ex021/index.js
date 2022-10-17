let num = [5, 8, 2, 9, 3]
//num[5] = 6
num.push(6)
let numQuant = num.length // quantidade de elemntos na array
let numSort = num.sort() // ordem crescente
console.log(num)
console.log(numQuant)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*for (i=0;i < num.length;i++) {
    
}*/

for (let i in num) {
    console.log(num[i])
}

var numEndereço = num.indexOf(9)

if (numEndereço == -1) {
    console.log('Não foi encontrado!')
} else {
    console.log(numEndereço)
}
