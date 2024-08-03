// Arrays o Arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Rect.js', 'Node.js']

// const tecnologias2 = tecnologias.filter(function (tech) {
//     if(tech !== 'HTML'){
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function (tech) {
    if (tech === 'HTML') {
        return 'HOLA'
    }else{
        return tech
    }
})

console.table(tecnologias2)