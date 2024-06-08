console.log("js conectado");
let i = 1;
$.get(`https://students-api.2.us-1.fl0.io/movies${i}`, (data) => {
  console.log(data);
  i++;
  createCards(data);
});

const createCards = (data) => {
  const moviesContainer = document.getElementById("movies-container");
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("a");
    title.href = "#";
    title.textContent = movie.title;
    title.style.textDecoration = "none";
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = movie.year;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);

    moviesContainer.appendChild(card);
  });
};
