import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'

const initialState = {
 myFavorites : [],
 allCharactersfav: []
}

const reducer = (state=initialState, {type, payload}) => { //payload es character = un solo objeto
    switch(type){
        case ADD_FAV: 
            return{
                ...state,
                myFavorites: [...state.allCharactersfav,payload], // por eso payload no lleva ...
                allCharactersfav: [...state.allCharactersfav,payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter (fav => fav.id !==payload)
            }
        case FILTER:
            const allCharactersFilter = state.allCharactersfav.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites:
                    payload === 'allCharacters'
                    ? [...state.allCharactersfav]
                    :allCharactersFilter
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharactersfav]
            return{
                ...state,
                myFavorites: 
                    payload === 'A'
                    ?allCharactersCopy.sort((a,b) => a.id - b.id)
                    :allCharactersCopy.sort((a,b) => b.id - a.id)
            }
        default:
            return  {...state}
    }
}

export default reducer; 