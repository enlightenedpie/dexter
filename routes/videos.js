var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    data: { access_token: "PUT ACCESS TOKEN HERE"},
    headers: { "Content-Type": "application/json"}
};

var store1, store2;


// client.get("https://api.vimeo.com/users/54907180", args, function (data, response) {
//         // parsed response body as js object
//         // raw response
//         store1 = data;
//         store2 = response;
//     }
// );


/* GET users listing. */
router.get('/', function(req, res, next) {
    if (store2) {
        res.render('videos', {text: JSON.stringify(store1)});
    }
    else {
        res.render('videos', {text: "An error occurred"});
    }
});

module.exports = router;
