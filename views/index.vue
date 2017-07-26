<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <!-- Modal Window Component. The toolbar and modal button reside inside. -->
        <modal :showmodal="showmodal" :modal_switch="modalSwitch" :user="user" :vidsrc="vidsrc"> </modal>

        <div id="NavBar" class="navbar">

            <!-- Course Navbar -->
            <navbar :title="activetab" :navlist="resources.courses[activecourse].tabs" :make_active_tab="makeActiveTab" :activetab="activetab" :format="capitalize"></navbar>

            <!-- Subject Navbar -->
            <sidebar id="rightbar" :title="activesubtab" :sidelist="resources.courses[activecourse].tabs[activetab]" :make_active="makeActiveSubtab" :isactive="activesubtab" :format="capitalize"> </sidebar>

            <!-- Video Type Navbar -->
            <sidebar id="leftbar" :title="activecourse" :sidelist="resources.courses" :make_active="makeActiveCourse" :isactive="activecourse" :format="uppercase"> </sidebar>

        </div>

        <!-- Displays when the activetab variable is anything but 'dashboard' -->
        <videos v-show="activetab != 'dashboard'" :title="capitalize(activesubtab)"
            :vidlist="resources.courses[activecourse].tabs[activetab].content" :vidsrc="vidsrc" :switch_vid="switchVid">
        </videos>

        <!-- Displays when the activetab variable is 'dashboard' -->
        <a v-show="activetab === 'dashboard'">
            <div class="pagecontent">
                <img :src="user.profile.image" height="80">
                <p> {{user.profile.firstName}} {{user.profile.lastName}} </p>
            </div>
        </a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
//          variable that controls modal window opening / closing
            showmodal : false,
//          default page video, with no specific url
            vidsrc : "https://www.youtube.com/embed/gE8qZTEgS8E",
        }
    },
    methods: {
        makeActiveCourse(course) {
            this.activecourse = course;
//          Set default tab upon entering a new course to dashboard
            this.activetab = "dashboard";
//          Edit url to match page.
            window.history.pushState('course', '', '/' + this.activecourse);
            },
        modalSwitch(bool) {
            this.showmodal = bool
        },
        makeActiveTab(tab) {
            this.activetab = tab;
//          Edit url to match page.
//          Set a default here to normalize subtab behavior without selecting blank tab
            window.history.pushState('tab', '', '/' + this.activecourse + '/' + this.activetab);
        },
        makeActiveSubtab(item) {
            this.activesubtab = item;
//          Edit url to match page.
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
