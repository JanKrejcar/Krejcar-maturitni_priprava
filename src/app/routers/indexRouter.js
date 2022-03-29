const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'controller'));

/*
    všechny rozpoznávané URL budou zachytávat vaše routery, např.

    router.use('/uzivatele', require(path.join(__dirname, 'uzivateleRouter')));
    router.use('/hry', require(path.join(__dirname, 'hryRouter')));

    apod.
*/

router.use('/main', require(path.join(__dirname, 'router')));

router.get([
    '/',
    '/index',
    'index.html',
    ], (dotaz, odpoved) => {
        odpoved.redirect('/main/mainView');
});

router.get('*', controller.error);

module.exports = router;
