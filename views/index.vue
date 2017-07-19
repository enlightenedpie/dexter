<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivesubject="makeactivesubject" :activesubject="activesubject" :showmodal="showmodal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentcourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc"> </modal>

            <div id="navbar-items">
              <ul class="nav-items">
                <li v-for="(item, index) in resources.courses[currentcourse].subjects[activesubject]" v-on:click="makeactivesubtab(index)">
                  <a> {{index}} </a>
                </li>
              </ul>
            </div>

            <!-- <a v-for="(item, index) in resources.courses[currentcourse].subjects[activesubject]">
                <videos :title="index | capitalize" :vidlist="item">
                </videos></a> -->

                <videos :title="activesubtab | capitalize" :vidlist="resources.courses[currentcourse].subjects[activesubject][activesubtab]">
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
            activesubtab: "content",
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
        },
        makeactivesubtab(item) {
            this.activesubtab = item;
            console.log(this.activesubtab);
        }
    },
    filters : {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
};
</script>
