const {Favorite} = require('../DB_connection.js');

module.exports = async(req, res) => {
    try {
        const {id} = req.params
 
        await Favorite.destroy({where: {id}}) 

        const allFavorite = await Favorite.findAll();
        return res.json(allFavorite);
       
    } catch (error) {
         return res.status(500).send(error.message)
    }
 };