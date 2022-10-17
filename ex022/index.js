function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(10 )
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}

let res2 = soma(10, 5)
console.log(res2)

let v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    let fat = 1
    for (let c = n;c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fato(x) {
    if( x == 1){
        return 1
    } else {
        return x * fato(x-1)
    }
}

console.log(fato(5))