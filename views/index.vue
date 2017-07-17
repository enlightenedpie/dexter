<template lang="html">
    <div>
        <div id="toolbar">
            <ul>
                <li> <h1>{{currentCourse}}</h1> </li>
                <li> <button id='modal-button' v-on:click="showModal = true"> Menu </button> </li>
                <li> Hi, {{user.profile.firstName}} </li>
            </ul>
            <modal v-if="showModal" v-on:close="showModal = false" :user="user" :currentcourse="currentCourse" :changecourse="switchCourse"> </modal>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            currentCourse : "ACT"
        }
    },
    methods: {
        switchCourse(course) {
            this.currentCourse = course;
            },
    }




};
//     data: function() {
//         return {
//         }
//     }
// }
// let curCourse = new Vue ({
//     el: ".maindiv",
//     data: {
//         currentCourse: "ACT"
//     }
// });

</script>
