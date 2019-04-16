let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes/routes.js");
let path = require("path")
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/build'));
routes(app);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));

let server = app.listen(3000, () => {
  console.log("app running on port.", server.address().port);
});