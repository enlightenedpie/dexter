<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivetab="makeactivetab" :makeactivesubtab="makeactivesubtab" :activetab="activetab" :showmodal="showmodal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentcourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc"> </modal>
            <a>
            <videos v-show="activetab != 'Dashboard'" :title="activesubtab | capitalize" :vidlist="resources.courses[currentcourse].tabs[activetab][activesubtab]">
            </videos></a>

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
