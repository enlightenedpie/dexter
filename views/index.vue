<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <modal :showmodal="showmodal" :resources="resources" :modalswitch="modalswitch" :user="user"
        :currentcourse="currentcourse" :switchcourse="switchcourse" :vidsrc="vidsrc"> </modal>

        <div id="NavBar" class="navbar">
            <h3>{{currentcourse}}</h3>

        <navbar :navlist="resources.courses[currentcourse].tabs" :makeactivetab="makeactivetab" :activetab="activetab"></navbar>

        <sidebar id="number1" :sidelist="resources.courses[currentcourse].tabs[activetab]" :makeactivesubtab="makeactivesubtab" :activesubtab="activesubtab"> </sidebar>

        <sidebar id="number2" :sidelist="resources.courses[currentcourse].tabs[activetab]" :makeactivecourse="makeactivesubtab" :activesubtab="activesubtab"> </sidebar>

        </div>

        <videos v-show="activetab != 'Dashboard'" :title="activesubtab | capitalize"
            :vidlist="resources.courses[currentcourse].tabs[activetab][activesubtab]">
        </videos>

        <a v-show="activetab === 'Dashboard'">
            <p>Sample text that could be read from the user element</p>
        </a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showmodal : false,
            vidsrc : "https://www.youtube.com/embed/gE8qZTEgS8E",
        }
    },
    methods: {
        switchcourse(course) {
            this.currentcourse = course;
            this.activetab = "Dashboard";
            window.history.pushState('course', '', '/' + this.currentcourse);
            },
        modalswitch(bool) {
            this.showmodal = bool
        },
        makeactivetab(tab) {
            this.activetab = tab;
            window.history.pushState('tab', '', '/' + this.currentcourse + '/' + this.activetab);
        },
        makeactivesubtab(item) {
            this.activesubtab = item;
            window.history.pushState('subtab', '', '/' + this.currentcourse + '/' + this.activetab + '/' + this.activesubtab);
        }
    },
    filters : {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
};
</script>
