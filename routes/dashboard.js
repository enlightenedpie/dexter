var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var fs = require('fs');

var user = {
    "courses" : {
        "ACT" : {
            "English" : true,
            "Math" : true,
            "Reading" : true,
            "Science" : true,
            "Essay" : true,
            "Practice" : true
        }
    },
    "videos" : {
        "ACTmath1" : {
            "completion": true,
            "uri": "https://image.flaticon.com/icons/svg/34/34099.svg"
        },
        "ACTmath2" : {
            "completion" : true,
            "uri": "https://image.flaticon.com/icons/svg/34/34099.svg"
        },
        "ACTmath3" : {
            "completion" : "0m35s",
            "uri": "https://image.flaticon.com/icons/svg/34/34099.svg"
        }
    },
    "profileData" : {
        "firstName" : "Rick",
        "lastName" : "Sanchez",
        "image" : "https://i.ytimg.com/vi/AzZ4K1OzomE/maxresdefault.jpg"
    },
    "orderData" : {
        "ACT" : "z07d6j6i76"
    },
    "settingsData": {
        "recommendContent" : true,
        "resetPassword" : "dummylink.js",
        "offlineContent" : false
    }
};

var videos = {};

fs.readFile('writeto.txt', 'utf8', function(err, contents) {
    videos = JSON.parse(contents);
});

module.exports = router;

router.get('/', function(req, res, next) {
    res.send(user + videos);
});