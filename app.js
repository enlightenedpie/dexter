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
            resources : {
                "courses" : {
                    "ACT" : {
                        "subjects" : {
                            "English" : {
                                "tips": {
                                    "16458": {
                                        "name": "ACT English Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT English Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT English Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content": {
                                    "16458": {
                                        "name": "ACT English 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT English 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT English 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Math" : {
                                "tips" : {
                                    "16458": {
                                        "name": "ACT Math Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Math Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Math Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content" : {
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
                            "Reading" : {
                                "tips": {
                                    "16458": {
                                        "name": "ACT Reading Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Reading Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Reading Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content": {
                                    "16458": {
                                        "name": "ACT Reading 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Reading 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Reading 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Science" : {
                                "tips": {
                                    "16458": {
                                        "name": "ACT Science Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Science Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Science Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content": {
                                    "16458": {
                                        "name": "ACT Science 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Science 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Science 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Essay" : {
                                "tips": {
                                    "16458": {
                                        "name": "ACT Essay Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Essay Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Essay Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content": {
                                    "16458": {
                                        "name": "ACT Essay 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Essay 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Essay 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Practice" : {
                                "tips": {
                                    "16458": {
                                        "name": "ACT Practice Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Practice Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Practice Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content": {
                                    "16458": {
                                        "name": "ACT Practice 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "ACT Practice 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "ACT Practice 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            }
                        }
                    },
                    "SAT" : {
                        "subjects" : {
                            "English" : {
                                "tips" : {
                                    "16458": {
                                        "name": "SAT English Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "SAT English Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "SAT English Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content" : {
                                    "12346" : {
                                        "name" : "SAT English 1",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "12347" : {
                                        "name" : "SAT English 2",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "12348" : {
                                        "name" : "SAT English 3",
                                        "time" : "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Math" : {
                                "tips" : {
                                    "16458": {
                                        "name": "SAT Math Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "SAT Math Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "SAT Math Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content" : {
                                    "12349" : {
                                        "name" : "SAT Math 1",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "12350" : {
                                        "name" : "SAT Math 2",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "12351" : {
                                        "name" : "SAT Math 3",
                                        "time" : "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            },
                            "Essay" : {
                                "tips" : {
                                    "16458": {
                                        "name": "SAT Essay Tips 1",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "89347": {
                                        "name": "SAT Essay Tips 2",
                                        "time": "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "85315": {
                                        "name": "SAT Essay Tips 3",
                                        "time": "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                },
                                "content" : {
                                    "SATenglish1" : {
                                        "name" : "SAT Essay 1",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "SATenglish2" : {
                                        "name" : "SAT Essay 2",
                                        "time" : "0",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    },
                                    "SATenglish3" : {
                                        "name" : "SAT Essay 3",
                                        "time" : "35",
                                        "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                                        "thumbnail" : "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
                                    }
                                }
                            }
                        },
                    }
                }
            },
            user:  {
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
            components: ['modal', 'videos'],
            mixins: []
        },
    };
    res.render('index', scope);
});

app.listen(3000);
