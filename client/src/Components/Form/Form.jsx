import React, { useState} from 'react';
import styles from "./form.module.css";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setVideogames, Search } from '../../Redux/actions';

function Form() {
   const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        released: "",
        description: "",
        rating: 0,
        platforms: [],
        genres: [],
        image: ""
    });
   const platformsOptions = ["PC", "Xbox", 'Xbox Series S/X' , "Nintendo Switch", 'macOS', "PlayStation 5", 'PlayStation 4', 'PlayStation 3', 'Linux' ];
   const [errors, setErrors] = useState({});
   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "rating") {
         const ratingValue = parseInt(value); 
         if (ratingValue >= 0 && ratingValue <= 5) {
             setForm({
                 ...form,
                 [name]: ratingValue
             });
         } else {
             return;
         }
     } else {
      setForm({
          ...form,
          [name]: value
      });
  }
  };
  const handleGenresChange = (evento) => {
   const selectedGenre = evento.target.value;
   const isChecked = evento.target.checked;

   if (isChecked) {
       setForm({
           ...form,
           genres: [...form.genres, selectedGenre]
       });
   } else {
       const updatedGenres = form.genres.filter(genre => genre !== selectedGenre);
       setForm({
           ...form,
           genres: updatedGenres
       });
   }
};
const handlePlatformChange = (e) => {
   const platformName = e.target.value;
   const isChecked = e.target.checked;
 
   if (isChecked) {
     setForm({
       ...form,
       platforms: [...form.platforms, { platform: { name: platformName } }]
     });
   } else {
     const updatedPlatforms = form.platforms.filter(p => p.platform.name !== platformName);
     setForm({
       ...form,
       platforms: updatedPlatforms
     });
   }
 };
 const fetchData = async () => {
   try {
       const response = await axios.get('http://localhost:3001/videogames');
       const data = response.data;
       dispatch(setVideogames(data))
   } catch (error) {
       console.error('Error fetching data:', error);
   }
};
const handleSubmit = async (e) => {
   e.preventDefault();
   const validImageUrlFormat = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/;
   const validNameFormat = /^[a-zA-Z0-9\s]+$/;
   const validDateFormat = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
   if (!validNameFormat.test(form.name)) {
     alert("Name invalid or blank. (only letters and numbers are allowed)");
     return;
     }
   if (!validDateFormat.test(form.released)) {
         alert("Format of date not valid, (yy/mm/dd)");
         return;
     }
   if (form.description.trim() === "") {
      alert("Please, enter a description");
      return;
   }
   if (form.platforms.every(platform => platform.platform.name.trim() === "")) {
      alert("Please, chose atleast one platform");
      return;
  }
  if (form.genres[0].trim() === "") {
   alert("Please, chose a genres");
   return;
   }
   if (!validImageUrlFormat.test(form.image)) {
        alert("Please, enter a valid format(png, jpg, jpeg, gif).");
        return;
    }
    try {
      const response = await axios.post('http://localhost:3001/videogames', form);

      if (response && response.data) {
          alert('Your game was created!!');
          fetchData()
      } else {
          alert('Error sending');
      }
  } catch (error) {
     alert( error.response.data.message);
  }
};
    return (
        <div className={styles.todo}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>Make your own Game!!</h1>
                <p className={styles.titulo2}>Welcome to our game creation platform! Here, you have the opportunity to bring your game to life. Customize every aspect, from the title to the release date, description, rating, and more.</p>
                <div className={styles.image2}></div>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.opciones}>
                    <label>
                        Name*
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter the game name" />
                    </label>
                    </div>
                    <div className={styles.opciones}>
                    <label className={styles.fecha2}>
                        Date of release* (YYYY/MM/DD)
                        <input className={styles.fecha}type="text" name="released" value={form.released} onChange={handleChange} placeholder="(YYYY/MM/DD)" />
                    </label>
                    </div>
                    <div className={styles.opciones}>
                    <label>
                        Description*
                        <textarea name="description" className={styles.des} value={form.des} onChange={handleChange}placeholder="Write your description" />
                    </label>
                    </div>
                    <div className={styles.opciones2}>
                    <label>
                        Rating*
                        <input className={styles.rating} type="number" name="rating" value={form.rating} onChange={handleChange} style={{ resize: 'none' }}/>
                    </label>
                    </div>
                    <div className={styles.opciones}>
                    <label>
                        Image*
                        <input  name="image"  className={styles.image} value={form.image} onChange={handleChange} placeholder="URL of the picture (png, jpg, jpeg, gif)"/>
                    </label>
                    </div>
                    <div className={styles.opcionesplata}>
                    <span className={styles.letra}>Choose platforms:* &nbsp;&nbsp;&nbsp;</span>
                         {platformsOptions.map(platform => (
                              <label key={platform} className={styles.opciones3}>
                                 <input
                                    type="checkbox"
                                    name="platform"
                                    value={platform}
                                    checked={form.platforms.some(p => p.platform.name === platform)}
                                     onChange={handlePlatformChange}
                                 />
                               {platform}
                              </label>
                            ))}
                     </div>
                    <div className={styles.genre}>
                    <label>
                    <span className={styles.letra}>Chose genres:*&nbsp;&nbsp;&nbsp;
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Action" onChange={handleGenresChange}/>
                      Action
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Indie" onChange={handleGenresChange} />
                      Indie
                    </label >
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Adventure" onChange={handleGenresChange} />
                      Adventure
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Strategy" onChange={handleGenresChange} />
                      Strategy
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Shooter" onChange={handleGenresChange} />
                      Shooter
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Simulation" onChange={handleGenresChange} />
                      Simulation
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Puzzle" onChange={handleGenresChange} />
                      Puzzle
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Platformer" onChange={handleGenresChange} />
                      Platformer
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Racing" onChange={handleGenresChange} />
                      Racing
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Massively Multiplayer" onChange={handleGenresChange} />
                      Massively Multiplayer
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Sports" onChange={handleGenresChange} />
                      Sports
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Fighting" onChange={handleGenresChange} />
                      Fighting
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Family" onChange={handleGenresChange} />
                      Family
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Board Games" onChange={handleGenresChange} />
                      Board Games
                    </label>
                    <label className={styles.opciones3} >
                      <input type="checkbox" name="genres" value="Card" onChange={handleGenresChange} />
                      Card
                    </label>
                     </span>
                    </label>
                    </div>
                    <button  className={styles.boton}type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;