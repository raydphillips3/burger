const express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");
var connection = require("./config/connection");
var port = process.env.PORT || 3000;

const app = express();


app.use(express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(routes);

connection.connect(function (err) {
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
});