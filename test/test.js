/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Todo = require('../models/todo');
describe("test todo", function() {
    describe('post function', function() {
        var todoObject = {
            todo : {
                id: "3",
                name: "ccc",
                date: "2016-09-03"
            }
        }
        
        it('should insert data for perfect data set', function() {
            return Todo.create(todo, res).then(function(result) {
               result.should.have.property('status', '0'); 
            });
        });
    }); 
});