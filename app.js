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



const mixin = {
    methods: {
        methods: {
        
        }
    },
};

let resources;

//  load in JSON object
fs.readFile('./VimeoTree.txt', 'utf8', function (err, data) {
    resources = JSON.parse(data);
});

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
        "resetPassword": "dummylink.js",
        "offlineContent": false
    }
};

const vue = {
    head: {
        title: "SupertutorTV",
        meta: ['mixin'],
        structuredData: {}
    },
    components: ['modal', 'videos', 'navbar','sidebar'],
    mixins: []
};

//  load variables on url, default
app.get('/', function(req, res){
    let scope = {
        data: {
            activecourse : 'act prep',
            activetab: 'dashboard',
            activesubtab: 'content',
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables on url, default tab and subtab
app.get('/:activecourse', function(req, res){
    let scope = {
        data: {
            activecourse : decodeURIComponent(req.params.activecourse).toLowerCase(),
            activetab: 'dashboard',
            activesubtab: 'content',
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables on url, default subtab
app.get('/:activecourse/:activetab', function(req, res){
    let scope = {
        data: {
            activecourse : decodeURIComponent(req.params.activecourse).toLowerCase(),
            activetab: decodeURIComponent(req.params.activetab).toLowerCase(),
            activesubtab: 'content',
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

//  load variables on url
app.get('/:activecourse/:activetab/:activesubtab/', function(req, res){
    let scope = {
        data: {
            activecourse : decodeURIComponent(req.params.activecourse).toLowerCase(),
            activetab: decodeURIComponent(req.params.activetab).toLowerCase(),
            activesubtab: decodeURIComponent(req.params.activesubtab).toLowerCase(),
            resources : resources,
            user: user
        },
        vue: vue,
    };
    res.render('index', scope);
});

app.listen(3000);
