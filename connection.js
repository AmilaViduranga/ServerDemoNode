/*
 * make the connection with mysql database
 * imported node_models => "mysql"
 */

var mysql = require('mysql');

function Connection() {
    this.pool = null;

    /*
     * initilization the connection
     */
    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todo'
        });
    };

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();
