const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'clanky.json'));

exports.vypsatClanky = () => {
    let clanky = db.JSON();
    delete clanky['next_id'];
    return clanky;
}

exports.pridatClanek = (autor, datumACas, nadpis, obsah) => {
    let id = db.get('next_id')

    db.set('next_id', id + 1);
        db.set(id, {
        autor,
        datumACas,
        nadpis,
        obsah,
        id
    });
}

exports.overeniHesla = (heslo) => {
    const {passwordControl} = require(path.join(__dirname,'..', '..', 'config'));
    return (heslo == passwordControl);
}

exports.detail = (id) => {
    let data = db.JSON();
    let clanek = data[id];
    return clanek; 
}

