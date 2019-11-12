const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { first_name, last_name, age, email } = req.body;

        const user = await User.create({ first_name, last_name, age, email });

        return res.json(user);
    }
};