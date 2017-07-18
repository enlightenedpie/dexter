<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">
            <modal :showmodal="showModal" :modalswitch="modalswitch" :user="user" :currentcourse="currentCourse" :switchcourse="switchCourse"> </modal>
            <div id="video-holder">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/5eHx-tBtgYs?ecver=1" frameborder="0" allowfullscreen></iframe>
            </div>
            <navbar :user="user" :currentcourse="currentCourse"></navbar>
            <videos :user="user" :currentcourse="currentCourse"></videos>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            currentCourse : "ACT",
            showModal : false
        }
    },
    methods: {
        switchCourse(course) {
            this.currentCourse = course;
            },
        modalswitch(bool){
            this.showModal = bool
        }
    }
};
</script>
