const path = require('path');
const express = require('express');
const expressVue = require('express-vue');
const favicon = require('serve-favicon');
const fs = require('fs');
const app = express();

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});
app.use(express.static(__dirname + '/public/stylesheets'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));



// const mixin = {
//     methods: {
//         methods: {
        
//         }
//     },
// };

let resources;

//  load in JSON object
fs.readFile('./VimeoTree.txt', 'utf8', function (err, data) {
    resources = JSON.parse(data);
});

function format(name) {
    return name.replace(/-/g, ' ').toLowerCase()
}

function getsrc(list, name){
    for (let i = 0; i < list.length; i++){
        if (format(list[i].name) === name){
            return list[i];
        }
    }
}

//dummy user object
const user = {
    "videos": {
        "recentlyWatched": {
            "91765": {
                "name": "SAT Math II Subject Test",
                "time": "0",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            },
            "94328": {
                "name": "SAT Chemistry Subject Test",
                "time": "0",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            },
            "57492": {
                "name": "SAT General Prep",
                "time": "35",
                "uri": "https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1",
                "thumbnail": "http://i.onionstatic.com/avclub/5533/09/16x9/960.jpg"
            }
        }
    },
    "profile": {
        "firstName": "Rick",
        "lastName": "Sanchez",
        "image": "https://i.ytimg.com/vi/AzZ4K1OzomE/maxresdefault.jpg"
    },
    "orders": {
        "Complete ACT Prep Package": "z07d6j6i76"
    },
    "settings": {
        "recommendContent": true,
        "resetPassword": "dummylink",
        "offlineContent": false
    }
};

const videfault = {"uri": "/videos/181869937", "duration": 36, "description": null, "pictures": {"link": "https://i.vimeocdn.com/video/590725878_100x75.jpg?r=pad", "width": 100, "height": 75, "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3a%2f%2fi.vimeocdn.com%2fvideo%2f590725878_100x75.jpg&src1=http%3a%2f%2ff.vimeocdn.com%2fp%2fimages%2fcrawler_play.png"}, "link": "https://vimeo.com/181869937", "name": "question 17"}

//main vue instance for app, all components included
const vue = {
    head: {
        title: "SupertutorTV",
        meta: ['mixin'],
        structuredData: {}
    },
    components: ['modal', 'videos', 'navbar','cms'],
    mixins: []
};

//  load variables from url, default
app.get('/', function(req, res){
    let scope = {
        data: {
            activecourse : 'act',
            activetab: 'science',
            activesubtab: 'null',
            vidsrc : videfault,
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables from url, default tab and subtab
app.get('/:activecourse', function(req, res){
    let scope = {
        data: {
            activecourse : format(req.params.activecourse),
            activetab: 'science',
            activesubtab: 'null',
            vidsrc : videfault,
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables from url, default subtab
app.get('/:activecourse/:activetab', function(req, res){
    let scope = {
        data: {
            activecourse : format(req.params.activecourse),
            activetab: format(req.params.activetab),
            activesubtab: 'null',
            vidsrc : videfault,
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables from url
app.get('/:activecourse/:activetab/:activesubtab/', function(req, res){
    let scope = {
        data: {
            activecourse : format(req.params.activecourse),
            activetab: format(req.params.activetab),
            activesubtab: format(req.params.activesubtab),
            vidsrc : videfault,
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables from url
app.get('/:activecourse/:activetab/:activesubtab/:vidname', function(req, res){
    let scope = {
        data: {
            activecourse : format(req.params.activecourse),
            activetab: format(req.params.activetab),
            activesubtab: format(req.params.activesubtab),
            vidsrc : getsrc(resources.courses[format(req.params.activecourse)].tabs[format(req.params.activetab)][format(req.params.activesubtab)], format(req.params.vidname)),
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

app.listen(3000);
