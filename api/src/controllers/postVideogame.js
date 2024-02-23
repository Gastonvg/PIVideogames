
const {Videogame, Genres} = require ('../db');

const postVideogame = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { name, description, platforms, image, released, rating, genres } = req.body;
        const existingVideogame = await Videogame.findOne({ where: { name } });

        if (existingVideogame) {
            return res.status(400).json({ message: 'Ya existe un videojuego con este nombre.' });
        }
        // Crea el nuevo videojuego en la base de datos
        const newVideogame = await Videogame.create({
          name,
          description,
          platforms,
          image,
          released,
          rating
        });
    
        // Busca los géneros en la base de datos por nombre
        const foundGenres = await Promise.all(genres.map(genrename =>
            Genres.findOne({ where: { name: genrename } })
          ));
    
        // Asocia el videojuego creado con los géneros encontrados
        await newVideogame.addGenres(foundGenres);
    
        // Envía una respuesta con el videojuego creado
        res.status(201).json(newVideogame);
      } catch (error) {
        // Maneja los errores y envía una respuesta de error
        console.error('Error creating videogame:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

module.exports = postVideogame;