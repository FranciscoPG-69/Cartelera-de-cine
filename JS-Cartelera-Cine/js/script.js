//Fondo de Negro
document.body.style.backgroundColor = "black";
//Letras de color Blanco
document.body.style.color = "white"; 

// Datos de las películas
var peliculas = [
    { 
        
        titulo: "Justiciero", 
        genero: "Acción", 
        duracion: "2h 15min",
        imagen: "https://statics.cinemex.com/movie_posters/UxB4QhUZzWWfswb-750x1125.jpg",
        descripcion: " ",
        url: "peli_justiciero.html"
    },
    { 
        titulo: "Pokemon la pelicula", 
        genero: "Acción", 
        duracion: "1h 35min",
        imagen: "https://www.ecartelera.com/carteles/5200/5220/004_m.jpg",
        descripcion: " ",
        url: "peli_pokemon.html"
    },
    { 
        titulo: "La Langosta", 
        genero: "Ciencia ficción", 
        duracion: "1h 18min",
        imagen: "https://pics.filmaffinity.com/the_lobster-643891588-large.jpg",
        descripcion: " ",
        url: "peli_langosta.html"
    },
    { 
        titulo: "Avatar", 
        genero: "Ciencia ficción", 
        duracion: "2h 18min",
        imagen: "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg",
        descripcion: " ",
        url: "peli_avatar.html"
    },
    
    // Agrega más películas aquí
];
function generarCartelera() {
    var cineparkDiv = document.getElementById("cinepark");

    peliculas.forEach(function(pelicula, index) {
        var peliculaDiv = document.createElement("div");
        peliculaDiv.className = "pelicula";
        peliculaDiv.innerHTML = `
        <h2>${pelicula.titulo}</h2>
        <p><strong>Género:</strong> ${pelicula.genero}</p>
        <p><strong>Duración:</strong> ${pelicula.duracion}</p>
        <a href="${pelicula.url}">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
        </a>
    `;
        cineparkDiv.appendChild(peliculaDiv);
    });
}

generarCartelera();

// Agrega los estilos CSS al head del documento
var styleElement = document.createElement("style");
styleElement.innerHTML = `
    .pelicula {
        border: 10px solid white;
        margin: 10px;
        padding: 10px;
        display: inline-block;
    }
    .pelicula img {
        max-width: 200px;
        height: 300px;
    }
`;
// Agrega el elemento <style> al <head> del documento
document.head.insertAdjacentElement("beforeend", styleElement);

