const {Favorite} = require('../DB_connection.js');

module.exports = async(req, res) => {
    try {
        const {id, name, origin, status, image, species, gender} = req.query;
        if(!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send("Faltan datos")};
 
       await Favorite.findOrCreate({where: {id, name, origin, status, image, species, gender}}); 

       const allFavorite = await Favorite.findAll();//El método findAll genera una SELECT consulta estándar que recuperará todas las entradas de la tabla
       //return res.status(200).json(allFavorite); //json o send es lo mismo 
       return res.json(allFavorite);
       
     } catch (error) {
         return res.status(500).send(error.message)
    }
 };