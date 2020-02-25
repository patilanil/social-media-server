let async = require('async'),
userDAO = require('../DAO/usersDAO');
//config = require("../Utilities/config").config;
 
 
/**API to create the user */
let createUser = (data, callback) => {
    async.auto({
        user: (cb) => {
            var dataToSet = {
            "firstname":data.firstname ? data.firstname : '',
            "lastname":data.lastname ? data.lastname : '',
            "email":data.email ? data.email : '',
            }

            userDAO.createUser(dataToSet, (err, dbData) => {
                if (err) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                return;
                }
                
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result": dataToSet });
            });
        }
    //]
    }, (err, response) => {
        callback(response.user);
    });
}

 /***API to get the users list */
let getUsers = (data, callback) => {
    async.auto({
        users: (cb) => {
            userDAO.getUsers({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.users);
    })
}

 /***API to get the users list */
 let getUserFriends = (data, callback) => {
    async.auto({
        userfriends: (cb) => {
            userDAO.getUserFriends(data,(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.userfriends);
    })
}

 /***API to get the users list */
 let getUserFriendFriends = (data, callback) => {
    async.auto({
        userfriendfriends: (cb) => {
            userDAO.getUserFriends(data,(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.userfriendfriends);
    })
}
 
module.exports = {
    createUser : createUser,
    getUsers : getUsers,
    getUserFriends : getUserFriends,
    getUserFriendFriends : getUserFriendFriends,
};