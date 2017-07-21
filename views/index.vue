<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <modal :showmodal="showmodal" :modal_switch="modalSwitch" :user="user" :vidsrc="vidsrc"> </modal>

        <div id="NavBar" class="navbar">

        <navbar :title="activetab" :navlist="resources.courses[activecourse].tabs" :make_active_tab="makeActiveTab" :activetab="activetab" :format="capitalize"></navbar>

        <sidebar id="rightbar" :title="activesubtab" :sidelist="resources.courses[activecourse].tabs[activetab]" :make_active="makeActiveSubtab" :isactive="activesubtab" :format="capitalize"> </sidebar>

        <sidebar id="leftbar" :title="activecourse" :sidelist="resources.courses" :make_active="makeActiveCourse" :isactive="activecourse" :format="uppercase"> </sidebar>

        </div>

        <videos v-show="activetab != 'dashboard'" :title="capitalize(activesubtab)"
            :vidlist="resources.courses[activecourse].tabs[activetab].content" :vidsrc="vidsrc" :switch_vid="switchVid">
        </videos>

        <a v-show="activetab === 'dashboard'">
            <p>Sample text that could be read from the user element</p>
        </a>

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
        makeActiveCourse(course) {
            this.activecourse = course;
            this.activetab = "dashboard";
            window.history.pushState('course', '', '/' + this.activecourse);
            },
        modalSwitch(bool) {
            this.showmodal = bool
        },
        makeActiveTab(tab) {
            this.activetab = tab;
//            Set a default here to normalize subtab behavior without selecting blank tab
            window.history.pushState('tab', '', '/' + this.activecourse + '/' + this.activetab);
        },
        makeActiveSubtab(item) {
            this.activesubtab = item;
            window.history.pushState('subtab', '', '/' + this.activecourse + '/' + this.activetab + '/' + this.activesubtab);
        },
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        },
        uppercase(title) {
            return title.toUpperCase();
        },
        switchVid(src){
            this.vidsrc = src.replace("vimeo.com", "player.vimeo.com/video");
        }
    },
};
</script>
