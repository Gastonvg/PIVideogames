const { Sequelize } = require('sequelize');
const axios = require('axios');
const { Videogame, Genres } = require ('../db');
require('dotenv').config();
const {DB_APIKEY} = process.env;
const URL = "https://api.rawg.io/api/games";
const getByName = async (req, res) => {
  const name = req.query.name;
  try { 
    let dbVideogames = [];
    let apiVideogames = [];

    // Buscar videojuegos en la base de datos que coincidan con el término de búsqueda en el nombre
    if (name) {
        dbVideogames = await Videogame.findAll({
            where: {
                name: {
                    [Sequelize.Op.iLike]: `%${name}%` // Búsqueda insensible a mayúsculas y minúsculas
                }
            },
            include: [{ model: Genres, attributes: ['id', 'name'], through: { attributes: [] } }],
            limit: 15
        });
    }
    if (dbVideogames.length < 15) {
      const response = await axios.get(`${URL}${DB_APIKEY}&search=${name}`);
      
      apiVideogames = response.data.results || [];
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

    const combinedResults = [...dbVideogames, ...mappedVideogames.slice(0, 15 - dbVideogames.length)];
    if (combinedResults.length === 0) {
      return res.status(404).json({ message: 'No se encontraron videojuegos.' });
    }
    res.json(combinedResults);
    }
  catch (error) {
    console.error('Error fetching genres:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getByName ;