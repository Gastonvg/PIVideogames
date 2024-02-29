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
        <a  className={style.logoig} href="https://github.com/Gastonvg" target="_blank" rel="noopener noreferrer">
              <img  className={style.logoli} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="Your Logo" />
           </a>
        <span className={style.textologos}> Github </span>
        <a  className={style.logoli} href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/" target="_blank" rel="noopener noreferrer">
              <img  className={style.logoli} src="https://seeklogo.com/images/L/linkedin-new-2020-logo-E14A5D55ED-seeklogo.com.png" alt="Your Logo" />
           </a>
        <span className={style.textologos}> LinkedIn </span>
        <div className={style.fondotextos}>
        <p className={style.texto}>¡Hi! I'm Gastón Vergagni, I'm 26 years old, and I am  the creator of this app.
        <br></br>
        <br></br>
        This is my firts web page development, with patience and researh,  I've managed to bring this humble app to life. While there's still plenty of room for improvement, I'm quite content with the progress I've made thus far.
        <br></br>
        <br></br>
        Feel free to contact me if you have any advice or feedback at: gasty_vergagni@hotmail.com.
        </p>
        <p className={style.texto}>Programming languages and tools utilized: <br></br>JavaScript - Html - Css - React (Router-dom, Redux) - Sequelize - SQL - NodeJS - Express - Axios.</p>
        </div>
        </div>
      </div>
    );
  };
  
  export default About;