const axios = require('axios');
const { Genres } = require ('../db');
require('dotenv').config();
const {DB_APIKEY} = process.env;
const URL = "https://api.rawg.io/api/genres";

const getGenres = async (req, res) => {
    try {
       
        let genres = await Genres.findAll();
    
        if (genres.length === 0) {
          
          const response = await axios.get(`${URL}${DB_APIKEY}`);
          const rawgGenres = response.data.results;
          console.log(rawgGenres);
    
        
          await Genres.bulkCreate(rawgGenres.map(Genres => ({ name: Genres.name, id: Genres.id })));
    
          
          genres = await Genres.findAll();
        }
        res.json(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

module.exports = getGenres;