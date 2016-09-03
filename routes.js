/*
 * managing the routes foor rest service
 */
var todo = require('./models/todo');

module.exports = {
    configure: function(app) {
        /*
         * enable the cors for paths
         */
        app.use(function(req, res, next) {
		  res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  next();
		});
        /*
         * get request
         */
        app.get('/todo/', function(req, res) {
          todo.get(res);
        });

        /*
         * post request
         */
        app.post('/todo/', function(req, res) {
          todo.create(req.body, res);
        });

        /*
         * put request
         */
        app.put('/todo/', function(req, res) {
          todo.update(req.body, res);
        });

        /*
         * detele request
         */
        app.delete('/todo/:id/', function(req, res) {
          todo.delete(req.params.id, res);
        });
        
        /*
         * get the one element only
         */
        app.get('/todo/:id', function(req, res) {
            todo.getItem(req.params.id, res);
        });
    }
};
