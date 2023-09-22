const {User} = require('../DB_connection.js')

module.exports = async(req, res) => {
   try {
       const {email, password} = req.body;
       if(!email || !password) return res.status(400).send("Faltan datos")

       const user = await User.findOrCreate({where: {email, password}}) // El método findOrCreatecreará una entrada en la tabla a menos que pueda encontrar una que cumpla con las opciones de consulta. En ambos casos, devolverá una instancia (ya sea la instancia encontrada o la instancia creada) y un booleano que indica si esa instancia fue creada o ya existía.
       return res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
   }
} 