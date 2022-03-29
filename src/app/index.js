const path = require('path');

const express = require('express');

const app = express();
const session = require('express-session');

const { key } = require(path.join(__dirname, '..', 'config'));

app.use('/', session({
    secret: key,
    secure: false,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        sameSite: true,
        expires: 300000 // 5 minut (60000 = 1 minuta)
    },
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'www')));
app.use(express.urlencoded({ "extended": true }));
app.use(express.json());

app.use('/', require(path.join(__dirname, 'routers', 'indexRouter')));

module.exports = app;