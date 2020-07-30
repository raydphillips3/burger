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

    insertOne: function (cb) {
        var sql = "INSERT INTO burgers (name, address) VALUES ('XXXX', 'XXXXX')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    },


    updateOne: function (cb) {
        var sql = "UPDATE burgers_db SET devoured = true WHERE id = 'XX'";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    }
}


module.exports = orm;