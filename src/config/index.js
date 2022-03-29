const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
    passwordControl: process.env.HESLO,
    key: process.env.SECRET_KEY,
};