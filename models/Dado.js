const db = require('./db')
const Dado = db.sequelize.define('login', {
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})


module.exports = Dado