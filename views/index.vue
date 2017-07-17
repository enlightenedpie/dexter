<template lang="html">
    <div id="parentdiv">
        <div id="toolbar">
            <ul>
                <li> <button id='modal-button' v-on:click="showModal = true"> Menu </button> </li>
                <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
                <li> Hi, {{ user.profile.firstName }} </li>
            </ul>
        </div>
        <div class="maindiv">
            <modal v-if="showModal" v-on:close="showModal = false" :user="user" :currentcourse="currentCourse" :changecourse="switchCourse"> </modal>
            <navbar :user="user" :currentcourse="currentCourse"></navbar>
            <div id="video-holder">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/5eHx-tBtgYs?ecver=1" frameborder="0" allowfullscreen></iframe>
            </div>
            <recommended :user="user" :currentcourse="currentCourse"></recommended>
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
