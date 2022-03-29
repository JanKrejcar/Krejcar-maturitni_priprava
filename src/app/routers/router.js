const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'controller'));

const verify = (req, res, next) => {
    if(req.session.userid == 'admin') {
        next();
    }
    else {
        res.redirect('/')
    }
}


router.get("/mainView", controller.mainView); 
router.get("/redakce", verify, controller.redakce);
router.get("/detail/:id", controller.detail);
router.post("/pridatClanek", controller.pridatClanek);
router.get("/redakce_heslo", controller.redakce_heslo);
router.post("/overeniHesla", controller.kontrola);

module.exports = router;