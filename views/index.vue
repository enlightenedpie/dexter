<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :showmodal="showModal" :modalswitch="modalswitch" :user="user" :currentcourse="currentCourse" :switchcourse="switchCourse" :vidsrc="vidsrc"> </modal>

            <videos :title="'Recommended Videos'" :vidlist="user.courses[currentCourse].recommended"></videos>

            <videos :title="'Recently Watched'" :vidlist="user.videos.recentlyWatched"></videos>

        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            currentCourse : "ACT",
            showModal : false,
            vidsrc : "https://www.youtube.com/embed/5eHx-tBtgYs?ecver="
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
