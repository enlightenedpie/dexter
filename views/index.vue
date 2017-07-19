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



        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentcourse : "ACT",
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
