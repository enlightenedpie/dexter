<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivesubject="makeactivesubject" :activesubject="activesubject" :showmodal="showModal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentCourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc"> </modal>

            <videos :title="'Tips'" :vidlist="resources.courses[currentCourse].tips"></videos>

            <videos :title="'Content'" :vidlist="resources.courses[currentCourse].subjects[activesubject].content"></videos>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentCourse : "ACT",
            activesubject: "Math",
            showModal : false,
            vidsrc : "https://www.youtube.com/embed/5eHx-tBtgYs?ecver="
        }
    },
    methods: {
        switchcourse(course) {
            this.currentCourse = course;
            this.activesubject = "Math";
            },
        modalswitch(bool) {
            this.showModal = bool
        },
        makeactivesubject(item) {
            this.activesubject = item;
        }
    },
};
</script>
