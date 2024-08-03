// Destructuring de objetos
// const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Rect.js', 'Node.js']

// const [,,,, c] = tecnologias
// console.log(c)

// El método necesita una condición al igual que el método map, el primero filtra y el segundo
// se emplea para hacer modificaciones 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

const pares = numeros.filter(function (num) {
    if (num % 2 == 0){
        return num
    }
})

console.table(pares)

const impares = numeros.filter(function (num) {
    if (num % 2 != 0){
        return num
    }
})

console.table(impares)

const cambio = numeros.map(function (num) {
    if(num == 2){
        return 3
    }else{
        return num
    }
})

console.table(cambio)