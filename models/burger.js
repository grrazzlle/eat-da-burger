// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgerName, devoured, cb) {
    orm.insertOne('burgers', ['burger_name', 'devoured'], [burgerName, devoured], function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
