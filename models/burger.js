var orm = require("../config/orm");

var burgerTime = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    insertOne: function(obj, cb) {
      orm.create("burgers", obj, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burgerTime;