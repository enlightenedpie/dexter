<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

        <!-- Modal Window Component. Toolbar and modal button reside inside. -->
        <modal :showmodal="showmodal" :modal_switch="modalSwitch" :user="user"> </modal>

        <!-- Video content and iFrame, videos display when the activetab variable is anything but 'dashboard' -->
        <videos :title="capitalize(activesubtab)" :activetab="activetab"
            :vidlist="resources.courses[activecourse].tabs[activetab][activesubtab]" :subtablist="resources.courses[activecourse].tabs[activetab]" :make_active="makeActiveSubtab" :isactive="activesubtab" :switch_vid="switchVid" :vidsrc="vidsrc" :format="capitalize">
        </videos>

        <div>
             <!--Course Navbar -->
            <navbar :title="activetab" :navlist="resources.courses[activecourse].tabs" :make_active_tab="makeActiveTab" :activetab="activetab" :format="capitalize"></navbar>
        </div>

        <!-- Dashboard content, displays when the activetab variable is 'dashboard' -->
        <div class="pagecontent" v-show="activetab === 'dashboard'">
            <div class="dashboard">
                <img :src="user.profile.image" height="80">
                <p> {{user.profile.firstName}} {{user.profile.lastName}} </p>
            </div>
        </div>
        </div>


        <div id="bar-holder">
            <div class="menus" id="right-bar">
                <li> Downloads </li>
                <li> Links </li>
            </div>

            <!-- Menu button -->
            <div class='menus' id="menu-bar">
                <li> 36 </li>
                <li> {{user.profile.firstName}} </li>
                <li> Progress </li>
            </div>
        </div>





        <cms> </cms>

    </div>
</template>

<script>
export default {
    data() {
        return {
//          variable that controls modal window opening / closing
            showmodal : false
        }
    },
    methods: {
        sanitize(string){
            return string.toLowerCase().replace(/ /g, "-")
        },
//      Toggle showmodal, which displays the modal window
        modalSwitch(bool) {
            this.showmodal = bool
        },
//      Selects a course as activecourse
        makeActiveCourse(course) {
            this.activecourse = course;
//          Set default tab upon entering a new course to dashboard
            this.activetab = "dashboard";
//          Edit url to match page.
            window.history.pushState(history.state, '', '/' + this.sanitize(this.activecourse));
        },
//      Selects a tab as activetab
        makeActiveTab(tab) {
            this.activetab = tab;
//          Edit url to match page.
//          Set a default here to normalize subtab behavior without selecting blank tab
            window.history.pushState(history.state, '', '/' + this.sanitize(this.activecourse) + '/' + this.sanitize(this.activetab));
        },
//      Selects a subtab as activesubtab
        makeActiveSubtab(item) {
            this.activesubtab = item;
//          Edit url to match page.
            window.history.pushState(history.state, '', '/' + this.sanitize(this.activecourse) + '/' + this.sanitize(this.activetab) + '/' + this.sanitize(this.activesubtab));
        },
//      Capitalizes the first letter of the every word in a string
        capitalize(title) {
            return title.replace(/\b\w/g, l => l.toUpperCase())
        },
//      Makes the entire string uppercase
        uppercase(title) {
            return title.toUpperCase();
        },
//      Repopulates iFrame with correct link
        switchVid(item){
            this.vidsrc = item;
            window.history.pushState(history.state, '', '/' + this.sanitize(this.activecourse) + '/' + this.sanitize(this.activetab) + '/' + this.sanitize(this.activesubtab) +  '/' + this.sanitize(item.name));
        }
    }
};
</script>
