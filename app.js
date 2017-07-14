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
app.use(express.static(__dirname + '/public/stylesheets'));


const mixin = {
    methods: {
        methods: {
            switchCourse(course) {
                curCourse.currentCourse = course;
            },
        }
    },
};

app.get('/', function(req, res){
    let scope = {
        data: {
            title: "SupertutorTV",
            counter: 0,
            showModal : false,
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
                    "recommendContent" : true,
                    "resetPassword" : "dummylink.js",
                    "offlineContent" : false
                }
            }
        },
        vue: {
            head: {
                title: "SupertutorTV",
                meta: ['mixin'],
                structuredData: {}
            },
            components: ['modal'],
            mixins: []
        }
    };
    res.render('index', scope);
});

app.listen(3000);
