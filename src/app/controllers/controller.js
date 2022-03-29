const path = require('path');

const model = require(path.join(__dirname, '..', 'models', 'model'));

exports.vypsatClanky = (request, response) => {
    model.vypsatClanky();
};

exports.error = (request, response) => {
    response.render('index/error');
};

exports.mainView = (request, response) => {
    let clanky = model.vypsatClanky();

    response.render('main/mainView',{
        titulek: 'články',
        klient: 'clanky',
        clanky,
    }); 
}; 

exports.redakce = (request, response) => {
    response.render('main/redakce');
}

exports.detail = (request, response) =>{
    let id = request.params.id;
    let clanek = model.detail(id);

    if(clanek) {
        response.render('main/detail', {
            clanek, id
        });
    } else {
        response.redirect('/');
    }
}

exports.pridatClanek = (request, response) => {
    let nadpis = request.body.nadpis;
    let autor = request.body.autor;
    let obsah = request.body.obsah;
    let datumACas = request.body.datumACas;

    model.pridatClanek(autor, datumACas, nadpis, obsah);
    return response.render('main/redakce')
}

exports.redakce_heslo = (request, response) => {
    response.render('main/redakce_heslo');
};

exports.kontrola = (request, response) => {
    let heslo = request.body.myInput;
    let odpoved = model.overeniHesla(heslo);
    if(odpoved){
        response.render('main/redakce');
    }else{
        response.redirect('/');
    }
};