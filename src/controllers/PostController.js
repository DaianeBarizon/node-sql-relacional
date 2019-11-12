const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'posts'}
        });
        //return only posts
        return res.json(user.posts);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { title, content } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const post = await Post.create({
          title,
          content,
          user_id  
        });

        return res.json(post);
    }
};