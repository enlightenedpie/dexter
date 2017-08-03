const path = require('path');
const express = require('express');
const expressVue = require('express-vue');
const favicon = require('serve-favicon');
const fs = require('fs');
const mongodb = require('mongodb');
const util = require('util');
const app = express();
const bodyParser = require('body-parser');

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});
app.use(express.static(__dirname + '/public/stylesheets'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));

let resources;
let user;

mongodb.connect("mongodb://localhost:27017/test", function(err, db) {
    const resource_collection = db.collection('testout');
    resource_collection.find().toArray(function(err, items) {
        resources = items[0];
    });
    const user_collection = db.collection('users');
    user_collection.find({'_id' : 1}).toArray(function(err, items) {
        user = items[0];
    });
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

const videfault = {"uri": "/videos/181869937", "duration": 36, "description": null, "pictures": {"link": "https://i.vimeocdn.com/video/590725878_100x75.jpg?r=pad", "width": 100, "height": 75, "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3a%2f%2fi.vimeocdn.com%2fvideo%2f590725878_100x75.jpg&src1=http%3a%2f%2ff.vimeocdn.com%2fp%2fimages%2fcrawler_play.png"}, "link": "https://vimeo.com/181869937", "name": "question 17"}

//main vue instance for app, all components included
const vue = {
    head: {
        title: "SupertutorTV",
        meta: ['mixin'],
        structuredData: {}
    },
    components: ['modal', 'videos', 'navbar','cms','login'],
    mixins: []
};


// THIS METHOD IS NOT CURRENTLY SECURE
// app.post('/', function(request, response) {
//         app.post('/', function(request, response){
//             // Convert back into the standard form for the
//             let preparse;
//             let parsed;
//             for (preparse in request.body){
//                 parsed = JSON.parse(preparse);
//                 break;
//             }
//             let to_db = {};
//             const course_title = [Object.keys(parsed)][0][0];
//             to_db.course = course_title;
//             to_db.subjects = [];
//             let subject;
//             for (subject in parsed[course_title]){
//                 let subarray = [];
//                 let entry;
//                 for (entry in parsed[course_title][subject]){
//                     subarray.push({"name": entry, "id": parsed[course_title][subject][entry]})
//                     console.log(subarray);
//                 }
//                 to_db.subjects.push({"title": subject, "entries" : subarray})
//                 console.log(to_db);
//             }
//             mongodb.connect("mongodb://localhost:27017/test", function(err, db) {
//                 const resource_collection = db.collection('testinfo');
//                 resource_collection.insertOne(to_db);
//         });
//     });
// });

app.post('/', function(request, response){
    // Convert back into the standard form for the
    let preparse;
    let parsed;
    for (preparse in request.body){
        parsed = JSON.parse(preparse);
        break;
    }
    let to_db = {};
    const course_title = [Object.keys(parsed)][0][0];
    to_db.course = course_title;
    to_db.subjects = [];
    let subject;
    for (subject in parsed[course_title]){
        let subarray = [];
        let entry;
        for (entry in parsed[course_title][subject]){
            subarray.push({"name": entry, "id": parsed[course_title][subject][entry]})
        }
        to_db.subjects.push({"title": subject, "entries" : subarray})
    }
        mongodb.connect("mongodb://localhost:27017/test", function(err, db) {
            const resource_collection = db.collection('testinfo');
            resource_collection.insertOne(to_db);
    });
});

//  load variables from url, default
app.get('/', function(req, res){
    let scope = {
        data: {
            activecourse : 'act',
            activetab: 'science',
            activesubtab: '',
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
            activesubtab: '',
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
            activesubtab: '',
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
