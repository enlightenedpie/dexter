<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivesubject="makeactivesubject" :activesubject="activesubject" :showmodal="showmodal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentcourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc"> </modal>

            <a v-for="(item, index) in resources.courses[currentcourse].subjects[activesubject]">
                <videos :title="index | capitalize" :vidlist="item">
                </videos></a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentcourse : "ACT",
            activesubject: "Math",
            showmodal : false,
            vidsrc : "https://www.youtube.com/embed/gE8qZTEgS8E"
        }
    },
    methods: {
        switchcourse(course) {
            this.currentcourse = course;
            this.activesubject = "Math";
            },
        modalswitch(bool) {
            this.showmodal = bool
        },
        makeactivesubject(item) {
            this.activesubject = item;
        }
    },
    filters : {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
};
</script>
