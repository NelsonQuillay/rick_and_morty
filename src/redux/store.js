import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPSE__ || compose; // sirve para conectar nuestra app con al extension REDUX  DEVETOOLS DEL NAVEGADOR 

const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // para poder hacer peticiones  a una Api/servidor 
);

export default store