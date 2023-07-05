const Sequelize = require('sequelize')
    //conexao com banco de dados

const sequelize = new Sequelize('sistemadecadastro', 'root', 'raama02', {
        host: "localhost",
        dialect: 'mysql'
    })
    //

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}