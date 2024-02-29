
const {Videogame, Genres} = require ('../db');

const postVideogame = async (req, res) => {
    try {
       
        const { name, description, platforms, image, released, rating, genres } = req.body;
        const existingVideogame = await Videogame.findOne({ where: { name } });

        if (existingVideogame) {
            return res.status(400).json({ message: 'Ya existe un videojuego con este nombre.' });
        }
       
        const newVideogame = await Videogame.create({
          name,
          description,
          platforms,
          image,
          released,
          rating
        });
    
       
        const foundGenres = await Promise.all(genres.map(genrename =>
            Genres.findOne({ where: { name: genrename } })
          ));
    
       
        await newVideogame.addGenres(foundGenres);
    
        
        res.status(201).json(newVideogame);
      } catch (error) {
       
        console.error('Error creating videogame:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

module.exports = postVideogame;