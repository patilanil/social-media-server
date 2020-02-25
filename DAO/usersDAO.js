    let dbConfig = require("../Utilities/mysqlConfig");


    let getUsers = (criteria, callback) => {
        dbConfig.getDB().query(`select * from users`, callback);
    }
     
    let getUserFriends = (criteria, callback) => {
        console.log(criteria.id)
        // dbConfig.getDB().query(`select users.id, users.firstname, relationship.user_one_id, relationship.user_two_id, relationship.status from users INNER JOIN relationship on  users.id = relationship.user_two_id where (relationship.user_one_id = ${criteria.id} or relationship.user_two_id = ${criteria.id} ) and relationship.status = 1`, callback);
        dbConfig.getDB().query(`select  users.id, users.firstname, users.lastname, users.email from users where (users.id in (select user_one_id from relationship where user_two_id = ${criteria.id} and status = 1 ) or users.id in (select user_two_id from relationship where user_one_id = ${criteria.id} and status = 1 ))`, callback);
       
    }

    let getUserFriendFriends = (criteria, callback) => {
        console.log(criteria)
        dbConfig.getDB().query(`select  users.id, users.firstname, users.lastname, users.email from users where (users.id in (select user_one_id from relationship where user_two_id = ${criteria.id} and status = 1 ) or users.id in (select user_two_id from relationship where user_one_id = ${criteria.id} and status = 1 ))`, callback);
       
    }
   
    module.exports = {
        getUsers : getUsers,
        getUserFriends : getUserFriends,
        getUserFriendFriends : getUserFriendFriends,
    }