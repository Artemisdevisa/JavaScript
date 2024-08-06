document.addEventListener('DOMContentLoaded', function () {

    // Objeto referente al fomrulario
    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }
    // Sirve para que unicamente se hagan modificaciones en las propiedades del objeto
    Object.seal(email)

    // Seleccionando los inputs
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const inputCC = document.querySelector('#cc')
    // 
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')

    // Asignar Eventos
    // validar con parentesis llama a todo el codigo de la funcion
    // validar sin parentesis llama a la funcion unicamente cuando se ejecuta el evento
    inputEmail.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar)

    inputMensaje.addEventListener('blur', validar)

    inputCC.addEventListener('blur', validar)

    formulario.addEventListener('submit', enviarEmail);


    // Añadir un evento al button reset
    btnReset.addEventListener('click', function (e) {
        e.preventDefault();

        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex')
        spinner.classList.remove('hidden')

        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
            // 
            email.email = '';
            email.asunto = '';
            email.mensaje = '';

            formulario.reset();
            comprobarEmail();

            // Crear una alerta
            const alerta = document.createElement('P')
            alerta.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg',
                'mt-10', 'font-bold', 'text-sm', 'uppercase'
            )
            alerta.textContent = 'Mensaje enviado correctamente'

            formulario.appendChild(alerta)

            setTimeout(() => {
                alerta.remove()
            }, 1000)
        }, 3000)
    }

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrar(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.id] = ''
            comprobarEmail()
            return;
        }

        if ((e.target.id === 'email' || e.target.id === 'cc') && !validarEmail(e.target.value)) {
            mostrar('El email no es valido', e.target.parentElement)
            email[e.target.id] = ''
            comprobarEmail()
            return;
        }

        limpiarAlerta(e.target.parentElement)

        email[e.target.id] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail()
    }

    function mostrar(mensaje, padre) {
        // Comprueba si ya existe una alerta
        limpiarAlerta(padre)

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Inyectar error en el formulario
        padre.appendChild(error)
    }

    function limpiarAlerta(padre) {
        alerta = padre.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove()
        }
    }

    // Validar email con expresiones regulares
    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        return regex.test(email)
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return;
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false

    }

})