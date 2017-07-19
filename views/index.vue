<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivetab="makeactivetab" :activetab="activetab" :showmodal="showmodal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentcourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc" :renderelement="renderelement"
            :changerender="changerender"> </modal>

            <a v-bind:class="{ active: renderelement === 'video' }" v-for="(item, index) in resources.courses[currentcourse].tabs[activetab]">
                <videos v-show="index != 'type'" :title="index | capitalize" :vidlist="item">
            </videos></a>

            <a v-bind:class="{ active : renderelement === 'dashboard' }">
                <p>Sample text that could be read from the user element</p>
            </a>

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
            activesubtab: "content",
            activetab: "Dashboard",
            showmodal : false,
            vidsrc : "https://www.youtube.com/embed/gE8qZTEgS8E",
        }
    },
    methods: {
        switchcourse(course) {
            this.currentcourse = course;
            this.activetab = "Math";
            },
        modalswitch(bool) {
            this.showmodal = bool
        },
        makeactivesubtab(item) {
            this.activesubtab = item;
            console.log(this.activesubtab);
        },
        makeactivetab(tab) {
            this.activetab = tab;
        },
        changerender(element){
            this.renderelement = element;
        }
    },
    filters : {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
};
</script>
