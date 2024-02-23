import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './detail.module.css'



function Detail() {
    const {id} = useParams()
    const [characterDetail, setCharacterDetail] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then(({data})=>{
            if(data.name)setCharacterDetail(data)
            else alert('No hay personajes con ese id')
        })
        return setCharacterDetail({}) 
    }, [id])

   console.log(characterDetail);
   const platformsNames = characterDetail.platforms?.map(platform => platform.platform.name);
   const platformsgenres = characterDetail.genres?.map(genres => genres.name);

    let tempElement = document.createElement('div');
    tempElement.innerHTML = characterDetail.description;
    const textoSinHTML = tempElement.innerText;
    return(
         <div className={styles.container} >
            <div className={styles.cuadrado}>
               <div className={styles.namer}>
                  <h2 className={styles.name}>{characterDetail.name}</h2>
               </div>
               <div className={styles.datos}>
                    {characterDetail.image !== undefined && <img src={characterDetail.image} className={styles.imagen}/>}
                       {characterDetail.background_image !== undefined && <img src={characterDetail.background_image} className={styles.imagen}/> }
                    <div className={styles.otrosdatos}>
                     <h2 className={styles.subtitulo}> Genres </h2>
                        {platformsgenres !== undefined && <h2 className={styles.otrosdatos}>{platformsgenres && platformsgenres.join(', ')} <br/> </h2> }
                        <h2 className={styles.subtitulo}> Rating </h2>
                         <h2 className={styles.otrosdatos}>{parseInt(characterDetail.rating)} <br/> </h2>
                         <h2 className={styles.subtitulo}> Date of release </h2>
                         <h2 className={styles.otrosdatos}>{characterDetail.released} <br/></h2>
                         <h2 className={styles.subtitulo}> Platforms </h2>
                        <h2 className={styles.otrosdatos}>{platformsNames && platformsNames.join(', ')} </h2>
                    </div>
             </div>
             <br></br>
             <h2 className={styles.titulodes}>Description</h2>
             <div className={styles.descripcion}> <h2 className={styles.descripcion2}> {textoSinHTML}</h2> </div>
             </div>
         </div>
    )   
}

export default Detail