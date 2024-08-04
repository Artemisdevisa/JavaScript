document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionando los inputs
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')

    // Asignar Eventos
    // validar con parentesis llama a todo el codigo de la funcion
    // validar sin parentesis llama a la funcion unicamente cuando se ejecuta el evento
    inputEmail.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar)

    inputMensaje.addEventListener('blur', validar)

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrar()
        }else{
            console.log('Esta lleno')
        }
    }

    function mostrar() {
        console.log('Ha ocurrido un error')
    }

})