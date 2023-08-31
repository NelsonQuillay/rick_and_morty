import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css'
import Nav from './components/Nav/Nav'
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

//const URL1 = 'https://rym2-production.up.railway.app/api/character/';
const URL2 = 'https://rickandmortyapi.com/api/character/';
//const KEY = '?key=henrym-NelsonQuillay'

const email = 'nmq_26@hotmail.com'
const password = 'arg1010'

function App() {
   const location = useLocation();  
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState (false);

   const login = (userData) => {
      if ( userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect (() => {
      !access && navigate('/')
   },[access])

   const onSearch = (id) => { // id es lo que escribe el usuario
      axios(`${URL2}${id}`)//(`${URL2}${id}${KEY}`)
      .then(({ data }) => { // then recibe la respuesta de la API en {axios.data}
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFilter = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFilter) //seteo el resultado de mi estado local characters 
   }


   return (
      <div className={style.App}>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>   
         }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}  />}/>                 
            <Route path='/about' element={<About/>}/>            
            <Route path='/detail/:id' element={<Detail/>}/> 
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>           
         </Routes>
      </div>
   );
}

export default App;
