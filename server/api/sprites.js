const router = require("express").Router();
const {
  models: { User, Sprite },
} = require("../db");
const { requireToken } = require("./middleware");
module.exports = router;

router.get('/', requireToken, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.dataValues.id, {
            include: [Sprite]
        });
        console.log('USER', user);
        res.send(user.dataValues.sprites);
    } catch (error) {
        next(error);
    }
});
