import Inicio from './Components/Inicio/inicio';
import Home from './Components/Home/home';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Error from './Components/Error/error';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Nav from './Components/Navbar/navbar';
import axios from 'axios'
import { setVideogames, Search} from './Redux/actions';
import { useDispatch } from 'react-redux';
import About from './Components/About/About';




function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/videogames`);
        if (data) {
          dispatch(setVideogames(data));
        } else {
          alert('There are no characters with this ID!');
        }
      } catch (error) {
        alert(error.message);
      }
    };
      fetchData();
  }, [dispatch]);
  

  const onSearch = async (id) => {
    if (!id) return alert('Enter an ID');
    try {
      const { data } = await axios.get(`http://localhost:3001/videogames/name?name=${id}`); 
      console.log(data);
      if (data) {
        dispatch(Search(data));
      } else {
        alert('!There are no characters with this ID!');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    setShowNav(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <div>
        {showNav && <Nav id="navbar" />}
      <Routes>
             <Route path="/" exact>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/home" element={<Home onSearch={onSearch}/>}/>
                <Route path="/detail/:id" element={<Detail/>} />
                <Route path="/form" element={<Form/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error/>} />
             </Route>
         </Routes>
    </div>
  );
}

export default App;
