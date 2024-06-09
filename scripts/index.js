console.log(tempData);

document.addEventListener("DOMContentLoaded", () => {
  const peliculasContainer = document.getElementById("peliculas");

  tempData.forEach((pelicula) => {
    const peliculaCard = document.createElement("div");
    peliculaCard.classList.add("tarjeta", "col-md-4");

    peliculaCard.innerHTML = `
      <img src="${pelicula.poster}" alt="${pelicula.title}">
      <h3>${pelicula.title} (${pelicula.year})</h3>
      <p><strong>Director:</strong> ${pelicula.director}</p>
      <p><strong>Duración:</strong> ${pelicula.duration}</p>
      <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
      <p><strong>Rating:</strong> ${pelicula.rate}</p>
    `;

    peliculasContainer.appendChild(peliculaCard);
  });
});
