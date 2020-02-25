let express = require('express'),
router = express.Router(),
userService = require('../Services/user-service');
 
/**Api to create User */
router.post('/create-user', (req, res) => {
    userService.createUser(req.body, (data) => {
        res.send(data);
    });
});
 
/**Api to get the list of users */
router.get('/get-users', (req, res) => {
    userService.getUsers(req.query, (data) => {
        console.log("==valll bcak", data)
        res.send(data);
    });
});

/**Api to get the list of users friends*/
router.get('/get-userfriends', (req, res) => {
    userService.getUserFriends(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of user friend friends*/
router.get('/get-userfriend-friends', (req, res) => {
    userService.getUserFriendFriends(req.query, (data) => {
        console.log("==valll bcak", data)
        res.send(data);
    });
});
 
module.exports = router;