import {Link} from 'react-router-dom'
import {addFav, removeFav} from '../../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';



function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState (false);
   
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className='cards'>
               <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
               <button onClick={()=>onClose(id)}>X</button>
         <div className= 'face front'>
            <img src={image}  alt="" />
         </div>
         <div className='face back'>
         <Link to={`/detail/${id}`}>
            <p>{name}</p>
         </Link>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
       addFav: (character) => {dispatch(addFav(character))},
       removeFav: (id) => {dispatch(removeFav(id))} 
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
   )(Card);
 