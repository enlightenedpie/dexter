const path = require('path');
const express = require('express');
const expressVue = require('express-vue');
const app = express();

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});

var exampleMixin = {
    methods: {
        hello: function () {
            console.log('Hello');
        }
    }
};

app.get('/', function(req, res){
    var scope = {
        data: {
            title: "SupertutorTV",
            user:  {
                "courses" : {
                    "ACT" : {
                        "English" : true,
                        "Math" : true,
                        "Reading" : true,
                        "Science" : true,
                        "Essay" : true,
                        "Practice" : true
                    },
                    "SAT" : {
                        "English" : true,
                        "Math" : true,
                        "Essay" : false
                    }
                },
                "videos" : {
                    "ACTmath1" : {
                        "completion": true,
                        "time" : "0",
                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1"
                    },
                    "ACTmath2" : {
                        "completion" : true,
                        "time" : "0",
                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1"
                    },
                    "ACTmath3" : {
                        "completion" : false,
                        "time" : "35",
                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1"
                    }
                },
                "profile" : {
                    "firstName" : "Rick",
                    "lastName" : "Sanchez",
                    "image" : "https://i.ytimg.com/vi/AzZ4K1OzomE/maxresdefault.jpg"
                },
                "orders" : {
                    "Complete ACT Prep Package" : "z07d6j6i76"
                },
                "settings": {
                    "recommendContent" : "checked",
                    "resetPassword" : "dummylink.js",
                    "offlineContent" : "checked"
                }
            }
        },
        vue: {
            head: {
                title: "SupertutorTV",
                meta: [],
                structuredData: {}
            },
            components: ['modal']
        }
    };
    res.render('index', scope);
});

app.get('/users/:userName', function(req, res){
    var user = users.filter(function(item) {
        return item.name === req.params.userName;
    })[0];
    res.render('user', {
        data: {
            title: 'SupertutorTV',
            user: user
        }
    });
});

app.listen(3000);
