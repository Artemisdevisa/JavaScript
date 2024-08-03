const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const carrito = {
    cantidad: 1,
    premium: true
    // Es poner un objeto dentro de otro 
    // ...producto
}

const nuevoObjeto = {
    ...producto,
    ...cliente
}

const nuevoObjeto2 = Object.assign(producto, cliente)

console.log(nuevoObjeto2)