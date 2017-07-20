<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <modal :showmodal="showmodal" :modal_switch="modalSwitch" :user="user" :vidsrc="vidsrc"> </modal>

        <div id="NavBar" class="navbar">
            <h3>{{activecourse}}</h3>

        <navbar :navlist="resources.courses[activecourse].tabs" :make_active_tab="makeActiveTab" :activetab="activetab"></navbar>

        <sidebar id="number1" :sidelist="resources.courses[activecourse].tabs[activetab]" :make_active="makeActiveSubtab" :isactive="activesubtab" :format="capitalize"> </sidebar>

        <sidebar id="number2" :sidelist="resources.courses" :make_active="makeActiveCourse" :isactive="activecourse" :format="uppercase"> </sidebar>

        </div>

        <videos v-show="activetab != 'dashboard'" :title="capitalize(activesubtab)"
            :vidlist="resources.courses[activecourse].tabs[activetab][activesubtab]">
        </videos>

        <a v-show="activetab === 'dashboard'">
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
        }
    },
};
</script>
