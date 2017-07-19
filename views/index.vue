<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <modal :showmodal="showmodal" :resources="resources" :modalswitch="modalswitch" :user="user"
        :activecourse="activecourse" :vidsrc="vidsrc"> </modal>

        <div id="NavBar" class="navbar">
            <h3>{{activecourse}}</h3>

        <navbar :navlist="resources.courses[activecourse].tabs" :makeactivetab="makeactivetab" :activetab="activetab"></navbar>

        <sidebar id="number1" :sidelist="resources.courses[activecourse].tabs[activetab]" :makeactive="makeactivesubtab" :isactive="activesubtab"> </sidebar>

        <sidebar id="number2" :sidelist="resources.courses" :makeactive="makeactivecourse" :isactive="activecourse"> </sidebar>

        </div>

        <videos v-show="activetab != 'Dashboard'" :title="activesubtab | capitalize"
            :vidlist="resources.courses[activecourse].tabs[activetab][activesubtab]">
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
        makeactivecourse(course) {
            this.activecourse = course;
            this.activetab = "Dashboard";
            window.history.pushState('course', '', '/' + this.activecourse);
            },
        modalswitch(bool) {
            this.showmodal = bool
        },
        makeactivetab(tab) {
            this.activetab = tab;
            window.history.pushState('tab', '', '/' + this.activecourse + '/' + this.activetab);
        },
        makeactivesubtab(item) {
            this.activesubtab = item;
            window.history.pushState('subtab', '', '/' + this.activecourse + '/' + this.activetab + '/' + this.activesubtab);
        }
    },
    filters : {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
};
</script>
