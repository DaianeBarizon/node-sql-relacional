const User = require('../models/User');

module.exports = {
    //List all
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    //Create data
    async store(req, res) {
        const { first_name, last_name, age, email } = req.body;

        const user = await User.create({ first_name, last_name, age, email });

        return res.json(user);
    }
};