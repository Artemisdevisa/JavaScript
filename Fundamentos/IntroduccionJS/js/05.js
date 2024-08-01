const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

// Este metodo permite congelar el objeto
// Object.freeze(producto)

// Este metodo sella el objeto solo permite modificar
// Object.seal(producto)

// Para modificar un valor de una propiedad de un objeto
producto.disponible = true

// Para agregar una propiedad
producto.img = 'imagen_1'

// Para eliminar una propiedad
delete producto.nombre

console.table(producto)