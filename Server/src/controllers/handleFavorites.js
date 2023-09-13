let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);

    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const {id} = req.params // id es string
    
    myFavorites = myFavorites.filter((favorite) => 
        Number(favorite.id) !== +id); //+id de params lo paso a numero

    return res.status (200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};