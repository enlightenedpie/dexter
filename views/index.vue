<template lang="html">
    <div id="parentdiv">
        <div class="maindiv">

            <modal :makeactivetab="makeactivetab" :makeactivesubtab="makeactivesubtab" :activetab="activetab" :showmodal="showmodal"
            :resources="resources" :modalswitch="modalswitch" :user="user" :currentcourse="currentcourse"
            :switchcourse="switchcourse" :vidsrc="vidsrc" :renderelement="renderelement"
            :changerender="changerender"> </modal>
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
