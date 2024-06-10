const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    renderCards(response.data);
  } catch (error) {
    console.error("No se pudieron obtener los datos de la API.", error);
  }
};

fetchData();