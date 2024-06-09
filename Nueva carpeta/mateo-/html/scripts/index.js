const renderCards = require("./renderCards")
$.get("https://students-api.up.railway.app/movies", (data, status) => {
    if (status === "success") {
        renderCards(data);
    } else {
        console.error("No se pudieron obtener los datos de la API.");
    }
});


