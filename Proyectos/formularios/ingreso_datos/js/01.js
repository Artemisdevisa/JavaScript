function capturar() {

    let formulario = document.querySelector('#formulario')
    let nom = formulario.querySelector('#nombre').value
    let pass = formulario.querySelector('#password').value
    // Capturar el textArea
    let texto = formulario.querySelector('#resultado')

    // Se aplica la mejora literal de objetos
    const persona = {
        nombre: nom,
        password: pass
    }

    console.table(persona)

    // Capturar los datos del objeto de con el destructuring
    const {nombre, password} = persona
    texto.value = `${nombre} - ${password}`
}


