
let cursoEC = document.getElementById("Info").dataset.curso;

fetch('../assets/js/fechas.json')
.then(response => response.json())
.then(data => {

    courses = data[cursoEC];
    let contenedor = document.getElementById("cursoPresencial");

    courses.map(curso => {
        contenedor.innerHTML+= `<p>curso ${curso.tipo.toUpperCase()}: ${curso.fecha} en ${curso.ubicacion}</p>`
    })

  
})
.catch(error => console.error('Error al cargar el JSON:', error));
