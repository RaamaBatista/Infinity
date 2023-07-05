const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const Dado = require("./models/Dado");
const passport = require("passport");
const session = require("express-session");
require('./config/auth')(passport);
const flash = require('connect-flash');
app.use(flash());


// Configuração do express-session
app.use(session({
    secret: "sua_chave_secreta",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.engine('handlebars', handlebars.engine({
    defaultLayouts: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//rotas

app.post("/login", passport.authenticate('local', {
    successRedirect: "/home",
    failureRedirect: '/loogin',
    failureFlash: true
}))

app.get("/loogin", function(requisicao, resposta) { //criando rotas
        resposta.render('oi') //linkado minha rota para minha página html
    })
    // configurando bodyParser


app.post("/home", function(requisicao, resposta) {
    Dado.findAll().then(function(dados) {
        resposta.render('home', { email: 'raamabatista914@gmail.com' })
    })

})
app.get("/login", function(requisicao, resposta) {
    resposta.render('formulario')
})
app.post("/add", function(requisicao, resposta) {

    Dado.create({
            email: requisicao.body.email,
            senha: requisicao.body.senha
        })
        .then(function() {
            resposta.redirect("/")
        }).catch(function(erro) {
            resposta.send("houve um erro " + erro)
        })
})






//rota do formulario, requisicao metodo post
app.listen(8081, function() { console.log("SERVIDOR") })