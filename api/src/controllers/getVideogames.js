const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
require('dotenv').config();
const {DB_APIKEY} = process.env;
const {Videogame, Genres} = require ('../db');

const getVideogames = async (req, res) => {
  try {
    let dbVideogames = [];

    dbVideogames = await Videogame.findAll({
      include: [{ model: Genres, attributes: ['id', 'name'], through: { attributes: [] } }]
      });
      let apiVideogames = [];
      let page = 1;
      let totalResults = 0;
      while (totalResults < 100) {
       
        const response = await axios.get(`${URL}${DB_APIKEY}&page=${page}&page_size=100`);
        const currentPageVideogames = response.data.results || [];
        apiVideogames = [...apiVideogames, ...currentPageVideogames];
        totalResults += currentPageVideogames.length;
        page++;
      }
      
    const mappedVideogames = apiVideogames.map(videojuego => ({
      id: videojuego.id,
      name: videojuego.name,
      description: videojuego.description,
      platforms: videojuego.platforms.map(platform => platform.platform.name),
      image: videojuego.background_image,
      releaseDate: videojuego.released,
      rating: videojuego.rating_top,
      genres: videojuego.genres.map(genre => ({ id: genre.id, name: genre.name }))
    }));
    const combinedResults = [...dbVideogames, ...mappedVideogames];

    res.json(combinedResults.slice(0, 100)); 

   
    } catch (error) {
    console.error('Error al obtener los videojuegos:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
   }
};

module.exports = getVideogames;