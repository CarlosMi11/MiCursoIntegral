
let cursoEC = document.getElementById("Info").dataset.curso;
console.log(cursoEC);
fetch('../assets/js/cursos.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    let courses = data[cursoEC];
    let contenedor = document.getElementById("cursoPresencial");
    console.log(courses);
    courses.fechas.map(curso => {
        contenedor.innerHTML+= `<p>Curso ${curso.tipo.toUpperCase()}: ${curso.fecha} en ${curso.ubicacion}</p>`
    })

  
})
.catch(error => console.error('Error al cargar el JSON:', error));
