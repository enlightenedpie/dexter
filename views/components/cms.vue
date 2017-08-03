<template>
<div class="cms-div">
		<h5>Add a Course </h5>
        <h4>Course<input title="CourseTitle" v-model="course_object.course"></h4>
        <ul class="entry-list" v-for="(subject, index) in course_object.subjects">
            <li>Subject: <input title="Subject" v-model="subject.title"></li>
            <li>
                <ul v-for="(entry, index) in subject.entries">
                    <li><strong>Entry: </strong></li>
                    <li>Name <input title="Name" v-model="entry.name"></li>
                    <li>ID <input title="ID" v-model="entry.id"></li>
                    <p class="cms-warning" v-if="entry.name === '' || entry.id === ''"> Please fill out each empty field in the Entry. </p>
            	<button class="button btn-secondary" @click="addEntry(subject.entries)">Add Entry</button>
                <button v-if="subject.entries.length > 1" v-on:click="removeEntry(subject.entries, index);" style="cursor: pointer">Remove Entry</button>
            	<li>
                	<button class="remove-subject-button" v-if="course_object.subjects.length > 1" v-on:click="removeSubject(index);" style="cursor: pointer">Remove Subject</button>
            	</li>
                </ul>
            </li>
            <p class="cms-warning" v-if="subject.title === '' || course_object.course === ''"> Please fill out each empty field in the Subject. </p>
        </ul>


    <div>
        <button class="button btn-primary" @click="addSubject">Add Subject</button>
    </div>
    <p> {{course_object}} </p>
    <div>
        <button class="button btn-primary" v-bind:disabled="checkCourse()" @click="updateCourse()">Update Course</button>
    </div>
    <div>
        <h3>Current Courses:</h3>
        <ul v-for="(course, index) in resources.courses">
            <li>
                {{index}}
                <button @click="removeCourse(index)">Remove</button>
            </li>
        </ul>
        <p>Please Note- in order for course changes to take effect, they must be made here, then the treeGen.py file
        (not included in git for security reasons) must be run, then the site must be restarted. If you screw up really
        badly, run mongoInit.py, then treeGen.py, then restart the server.</p>
    </div>
</div>
</template>
<script>
    const mongodb = require('mongodb');
    export default {
        data() {
            return {
                course_object: {
                    course: "",
                    subjects: [{"title":"", "entries": [{"name": "", "id": ""}]}]
                },
            }
        },
        props: ['resources'],
        methods: {
            addSubject: function () {
                let elem = document.createElement('li');
                this.course_object.subjects.push({
                    title: "",
                    entries: [{"name": "", "id": ""}]
                });
            },
            removeSubject: function (index) {
                this.course_object.subjects.splice(index, 1);
            },
            addEntry: function (item) {
                let elem = document.createElement('li');
                item.push({
                    name: "",
                    id: ""
                })
            },
            removeEntry: function (item, index) {
                item.splice(index, 1)
            },
            checkCourse: function(){
                if (!this.course_object.course){
                    return true;
                }
                let subject;
                for (subject in this.course_object.subjects) {
                    if (!this.course_object.subjects[subject].title){
                        return true;
                    }
                    let entry;
                    for (entry in this.course_object.subjects[subject].entries) {
                        if (!this.course_object.subjects[subject].entries[entry].name || !this.course_object.subjects[subject].entries[entry].id){
                            return true;
                        }
                    }
                }
                return false;
            },
            updateCourse: function () {
//              First convert to pure JSON for the POST method
                let params = {};
                const course_name = this.course_object.course.toLowerCase();
                params[course_name] = {};
                let subject;
                let title;
                for (subject in this.course_object.subjects) {
                    title = this.course_object.subjects[subject].title.toLowerCase();
                    params[course_name][title] = {};
                    let entry;
                    let subname;
                    for (entry in this.course_object.subjects[subject].entries) {
                        subname = this.course_object.subjects[subject].entries[entry].name.toLowerCase();
                        params[course_name][title][subname] = this.course_object.subjects[subject].entries[entry].id.toLowerCase()
                    }
                }
//              Set variables
                const url = "/";
                const xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//              Post stringified version
                xhr.send(JSON.stringify(params));
            },
            removeCourse(name){
                const url = "/remove";
                const xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(JSON.stringify({'course': name}));
            }
        }
    }
</script>
