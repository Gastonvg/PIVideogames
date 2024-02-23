const axios = require('axios');
const { Genres } = require ('../db');
require('dotenv').config();
const {DB_APIKEY} = process.env;
const URL = "https://api.rawg.io/api/genres";

const getGenres = async (req, res) => {
    try {
        // Consultar los géneros en la base de datos
        let genres = await Genres.findAll();
    
        if (genres.length === 0) {
          // Si no hay géneros en la base de datos, obtenerlos de la API RAWG
          const response = await axios.get(`${URL}${DB_APIKEY}`);
          const rawgGenres = response.data.results;
          console.log(rawgGenres);
    
          // Guardar los géneros en la base de datos
          await Genres.bulkCreate(rawgGenres.map(Genres => ({ name: Genres.name, id: Genres.id })));
    
          // Consultar los géneros nuevamente después de guardarlos en la base de datos
          genres = await Genres.findAll();
        }
        res.json(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

module.exports = getGenres;