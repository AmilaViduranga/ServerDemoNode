/*
 * main app file, just like index file
 * handle every dependancy, api
 * export rest service to outer
 * required node_models => "express", "body-parser"
 * requiered innerscoped models => "connection","routes"
 */

var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
var cors = require('cors');
/*
 * created the express app using constructor of xpress
 */
var app = express();
app.use(cors());

app.use(bodyparser.urlencoded({extended: true}));
/*
 * send the result as json contents
 */
app.use(bodyparser.json());

connection.init();
routes.configure(app);

/*
 * activate the server using port 8002
 */
var server = app.listen(8002, function() {
  console.log('Server listening on port ' + server.address().port);
});
