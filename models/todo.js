/*
 * this model is todo model that handle every get, put, post, delete request
 */

/*
 * connection model implement here, file is ../connection and exported model iss connection
 */
var connection = require('../connection');

/*
 * create the model todo
 */
function Todo() {
    /*
     * goal:- handle get method to get all the data
     * -----params----
     * res :- response 
     */
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from todo_list', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    /*
     * goal:-  add todo object to database
     * -----params---- 
     * res :- response 
     * todo:- new object going to add
     */
    this.create = function(todo, res) {
        connection.acquire(function(err, con) {
            con.query('insert into todo_list set ?', todo, function(err, result) {
                con.release();
                if (err) {
                  res.send({status: 1, message: 'TODO creation failed'});
                } else {
                  res.send({status: 0, message: 'TODO created successfully'});
                }
            });
        });
    };

    /*
     * goal:-  update the excisting object
     * -----params----
     * res :- response 
     * todo:- excist object that used to update
     */
    this.update = function(todo, res) {
        connection.acquire(function(err, con) {
            con.query('update todo_list set ? where id = ?', [todo, todo.id], function(err, result) {
                con.release();
                if (err) {
                  res.send({status: 1, message: 'TODO update failed'});
                } else {
                  res.send({status: 0, message: 'TODO updated successfully'});
                }
            });
        });
    };

    /*
     * goal:-  delete the excisting object
     * -----params----
     * res :- response 
     * id:- excist object id that used to delete
     */
    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from todo_list where id = ?', [id], function(err, result) {
                con.release();
                if (err) {
                  res.send({status: 1, message: 'Failed to delete'});
                } else {
                  res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };
    
    /*
     * goal:- get the single item only
     * -----params----
     * res :- response,
     * id :- id of the todo 
     */
    this.getItem = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('select * from todo_list where id = ?', [id], function(err, result) {
                con.release();
                if (err) {
                  res.send({status: 1, message: 'Failed to delete'});
                } else {
                  res.send(result);
                }
            });
        });
    };
}

/*
 * export this model as "todo" 
 */
module.exports = new Todo();
