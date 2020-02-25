let mysqlConfig = require("../Utilities/mysqlConfig");
 
let initialize = () => {
    mysqlConfig.getDB().query("create table IF NOT EXISTS users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS relationship (user_one_id INT(6),  user_two_id INT(6), action_user_id INT(6),  status INT(1))");
}
 
module.exports = {
initialize: initialize
}