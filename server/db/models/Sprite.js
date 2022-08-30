const Sequelize = require("sequelize");
const db = require("../db");

const Sprite = db.define("sprite", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: "cat",
  },
});

module.exports = Sprite;
