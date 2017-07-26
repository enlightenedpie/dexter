<template>
<div class="cms-div">
    <table class="table">
        <thead>
        <h4>Course</h4>
        <input>
        <tr>
            <td><strong>Subject</strong></td>
            <td><strong>Content</strong></td>
            <td></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, index) in rows">

            <td><input type="text" v-model="row.title"></td>
            <td>
                <tr v-for="(thing, index) in row.content">
                    <td>Name<input type="text" v-model="thing.name"></td>
                    <td>ID<input type="text" v-model="thing.id"></td>
                </tr>
            <button class="button btn-secondary" @click="addContent(row.content)">Add Content</button>
                <a v-on:click="removeContent(row.content, index);" style="cursor: pointer">Remove Content</a>
            <td>
                <a v-on:click="removeSubject(index);" style="cursor: pointer">Remove Subject</a>
            </td>


        </tbody>
    </table>
    <div>
        <button class="button btn-primary" @click="addSubject">Add Subject</button>
    </div>
</div>
</template>

<script>
    export default{
        data() {
            return {
                rows: []
            }
        },
        methods: {
            addSubject: function() {
                let elem = document.createElement('tr');
                this.rows.push({
                    title: "",
                    description: "",
                    content: []
                });
            },
            removeSubject: function(index) {
                this.rows.splice(index, 1);
            },
            addContent: function(item){
                let elem = document.createElement('td');
                item.push({
                    name: "",
                    id: ""
                })
            },
            removeContent: function(item, index){
                item.splice(index, 1)
            }
        }
    }
</script>
