import style from './About.module.css'

const About = () => {
    return (
      <div className={style.titulo}>
        <br></br>
        <br></br>
        <br></br>
        <div className={style.div}>
        <div className={style.fotoig}>
        <img  className={style.fotoig2} src="https://i.ibb.co/VBMjC6B/perfil.jpg" alt="Your Logo" />
        </div>
          <a className={style.logoig} href="https://www.instagram.com/gasty.vergagni/" target="_blank" rel="noopener noreferrer">
              <img  className={style.logoig} src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="Your Logo" />
           </a>
        <span className={style.textologos}> instagram </span>
        <a  className={style.logoig} href="https://www.facebook.com/gastyvergagni/" target="_blank" rel="noopener noreferrer">
              <img  className={style.logoig} src="https://seeklogo.com/images/F/facebook-icon-logo-AEF3A8F447-seeklogo.com.png" alt="Your Logo" />
           </a>
        <span className={style.textologos}> Facebook </span>
        <a  className={style.logoli} href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/" target="_blank" rel="noopener noreferrer">
              <img  className={style.logoli} src="https://seeklogo.com/images/L/linkedin-new-2020-logo-E14A5D55ED-seeklogo.com.png" alt="Your Logo" />
           </a>
        <span className={style.textologos}> LinkedIn </span>
        <div className={style.fondotextos}>
        <p className={style.texto}>¡Hola! Soy Gastón Vergagni, tengo 26 y soy el creador de esta aplicación.
        <br></br>
        Este es mi primer desalloro  de una pagina web, con paciencia e investigación, termine creando esta humilde applicacion.
        <br></br>
        Contactame: gasty_vergagni@hotmail.com.
        </p>
        <p className={style.texto}>¡Hi! I'm Gastón Vergagni, I'm 26 years old, and I am  the creator of this app.
        <br></br>
        This is my firts web page development, with patience and researh, i manage to create this humble app. 
        <br></br>
        Contact me: gasty_vergagni@hotmail.com.
        </p>
        <p className={style.texto}>Programming languages used(Lenguajes de programación usados): JavaScript - html - css - react - redux - sequelize - cjs.</p>
        </div>
        </div>
      </div>
    );
  };
  
  export default About;