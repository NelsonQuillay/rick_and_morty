import Card from "../Card/Card"
import {connect, useDispatch} from 'react-redux';
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState (false)  ;

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
        setAux (true);
    }
    
    return (
        <>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="B">Descendente</option>
        </select> 
        <section onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="GenderLess">GenderLess</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
        </section>
        {
            myFavorites?.map(fav=>{
                return(
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                    />
                )
            })
        }
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect (
    mapStateToProps,
    null
)(Favorites)