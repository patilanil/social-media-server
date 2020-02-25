var config = require("./config").config;
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: config.DB_URL_MYSQL.host,
  user: config.DB_URL_MYSQL.user,
  password: config.DB_URL_MYSQL.password,
  database: config.DB_URL_MYSQL.database,
});
 
connection.connect(function(err) {
    if (err) { 
        console.log("=========Err Database Connection=====", err)
        throw err 
    } else {
      console.log("Database Connected!");
      require('../Models/User').initialize();
    }
  });

let getDB = () => {
  return connection;
}
 
module.exports = {
getDB: getDB
}
