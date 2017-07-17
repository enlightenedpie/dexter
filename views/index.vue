<template lang="html">
    <div id="parentdiv">
        <div id="toolbar">
            <ul>
                <li> <button id='modal-button' v-on:click="showModal = true"> Menu </button> </li>
                <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
                <li> Hi, {{user.profile.firstName}} </li>
            </ul>
        </div>
        <div class="maindiv">
            <div id="NavBar">
            <h3>{{currentCourse}}</h3>
                <a>
                    <ul v-for="(item, index) in user.courses">
                    <li v-for="(subitem, subindex) in item">
                        <a v-if="index === currentCourse">{{subindex}}</a>
                    </li>
                    </ul>
                </a>
            </div>
            <div>

            </div>

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
</script>
