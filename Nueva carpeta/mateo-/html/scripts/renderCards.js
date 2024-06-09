const moviesContainer = document.getElementById("peliculas");
const renderCards = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("tarjeta", "col-md-4");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.innerHTML = movie.title;

        const poster = document.createElement("img");
        poster.classList.add("card-image");
        poster.src = movie.poster;

        const year = document.createElement("p");
        year.classList.add("card-year");
        year.innerHTML = movie.year;

        card.appendChild(title);
        card.appendChild(poster);
        card.appendChild(year);

        moviesContainer.appendChild(card);
    });
};

module.exports = renderCards;