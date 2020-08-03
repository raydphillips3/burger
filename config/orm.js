var mysql = require('mysql');
var connection = require("../config/connection");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    create: function (db, obj, cb) {
        var sql = "INSERT INTO ?? SET ??";
        connection.query(sql, [db, obj], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            cb();
        });
    },


    update: function (db, col, id, cb) {
        var sql = "UPDATE ?? SET ?? = true WHERE `id` = ?";
        connection.query(sql, [db, col, id], function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            cb();
        });
    }
}


module.exports = orm;