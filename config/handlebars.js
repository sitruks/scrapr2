const exphbs = require("express-handlebars");

const path = __dirname + '/../views/';

const hb = exphbs({
            defaultLayout: "main",
            extname: ".hbs",
            layoutsDir: `${path}layouts`,
            // layoutsDir: path + "layouts",
            partialsDir: `${path}common`,
            // partialsDir: path + "common",
        });

module.exports = hb;