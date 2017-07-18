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
        
        }
    },
};

app.get('/', function(req, res){
    let scope = {
        data: {
            title: "SupertutorTV",
            counter: 0,
            user:  {
                "courses" : {
                    "ACT" : {
                        "subjects" :
                            ["English",
                            "Math",
                            "Reading",
                            "Science",
                            "Essay",
                            "Practice"],
                        "recommended" : {
                            "16458" : {
                                "name" : "ACT Math 1",
                                "time" : "0",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                            },
                            "89347" : {
                                "name" : "ACT Math 2",
                                "time" : "0",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                            },
                            "85315" : {
                                "name" : "ACT Math 3",
                                "time" : "35",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                            }
                        }
                    },
                    "SAT" : {
                        "subjects" :
                            ["English",
                            "Math",
                            "Essay"],
                        "recommended" : {
                            "SATenglish1" : {
                                "name" : "SAT English 1",
                                "time" : "0",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                        },
                            "SATenglish2" : {
                                "name" : "SAT English 2",
                                "time" : "0",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                            },
                            "SATenglish3" : {
                                "name" : "SAT English 3",
                                "time" : "35",
                                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                            }
                        }
                    }
                },
                "videos" : {
                    "recentlyWatched" : {
                        "91765" : {
                            "name" : "SAT Math II Subject Test",
                            "time" : "0",
                            "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                            "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                        },
                        "94328" : {
                            "name" : "SAT Chemistry Subject Test",
                            "time" : "0",
                            "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                            "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                        },
                        "57492" : {
                            "name" : "SAT General Prep",
                            "time" : "35",
                            "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                            "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                        }
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
            components: ['modal', 'navbar', 'videos'],
            mixins: []
        }
    };
    res.render('index', scope);
});

app.listen(3000);
