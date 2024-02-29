const axios = require('axios');
const {Videogame, Genres} = require ('../db');
require('dotenv').config();
const {DB_APIKEY} = process.env;
const URL = "https://api.rawg.io/api/games/";
const { Sequelize } = require('sequelize');

const getByid = async (req, res) => {
    const { idVideogame } = req.params;
    try {
        if(isNaN(idVideogame)){
            const dbVideogame = await Videogame.findOne({ where: { id: idVideogame }, include: [{ model: Genres, attributes: ['id', 'name'], through: { attributes: [] } }], });
            res.json(dbVideogame);
        } else {
                const response = await axios.get(`${URL}${idVideogame}${DB_APIKEY}`);
                const data = response.data;
        res.json(data);
    }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
module.exports = getByid ;