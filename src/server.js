const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("../controllers/burgers_controller")

const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});