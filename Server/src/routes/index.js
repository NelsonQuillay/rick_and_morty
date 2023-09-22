const {getCharById }= require('../controllers/getCharById');
const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const router = require('express').Router();

router.get('/login', login); //router.get('/login',(req,res)=>{login(req,res)});
router.post('/login', postUser); 
router.post('/fav', postFav); //router.post('/fav',(req,res)=>{postFav(req,res)});
router.delete('/fav/:id', deleteFav); //router.delete('/fav/:id',(req,res)=>{deleteFav(req,res)});
router.get('/character/:id', getCharById); //router.get('/character/:id',(req,res)=>{getCharById(req,res)});

module.exports = router;