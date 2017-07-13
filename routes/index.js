const path = require('path');
const express = require('express');
const expressVue = require('express-vue');
const Vue = require('vue');
const app = express();

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '../views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '../views/components'),
    defaultLayout: 'layout'
});

const userData = {
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
};

app.get('/', function(req, res){
    const scope = {
        data: {
            userData: userData
        }
    };
    res.render('index', scope);
});


// register modal component
Vue.component('modal', {
    template: '#modal-template'
})

// start app
new Vue({
    el: '#app',
    data: {
        showModal: false
    }
})

app.get('/test', function(req, res){
    const scope = {
        data: {
            userData: userData
        }
    };
    res.render('test', scope);
});

app.listen(3000);
console.log('Express server listening on port 3000');
