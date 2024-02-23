const express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getGenres = require('../controllers/getGenres')
const getVideogames = require('../controllers/getVideogames');
const postVideogame = require('../controllers/postVideogame');
const getByName = require('../controllers/getByName');
const getByid = require('../controllers/getById');



router.get('/videogames/name', getByName);
router.get('/videogames/:idVideogame', getByid);
router.get('/videogames', getVideogames);
router.post('/videogames', postVideogame);
router.get('/genres', getGenres);


module.exports = router;
