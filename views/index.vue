<template lang="html">
    <div id="parentdiv">
        <div id="toolbar">
            <ul>
                <li> <button id='modal-button' v-on:click="showModal = true"> Menu </button> </li>
                <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
                <li> Hi, {{user.profile.firstName}} </li>
            </ul>
        </div>

         <modal v-if="showModal" v-on:close="showModal = false" :user="user" :currentcourse="currentCourse" :changecourse="switchCourse"> </modal>
         
        <div class="maindiv">

            <div id="video-holder">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/5eHx-tBtgYs" frameborder="0" allowfullscreen></iframe>
            </div>

            <h1> Hour of Devastation Trailer </h1>

            <div id="NavBar">
                <h3>{{currentCourse}}</h3>
                <a>
                    <ul v-for="(item, index) in user.courses">
                    <li v-for="(subitem, subindex) in item.subjects">
                        <a v-if="index === currentCourse">{{subitem}}</a>
                    </li>
                    </ul>
                </a>
            </div>
            <div class="recommended">Recommended Videos
                <a>
                    <ul v-for="(item, index) in user.courses">
                    <li v-for="(subitem, subindex) in item.recommended">
                        <a v-if="index === currentCourse">{{subitem.name}}</a>
                    </li>
                    </ul>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data() {
        return {
            currentCourse : "ACT"
        }
    },
    methods: {
        switchCourse(course) {
            this.currentCourse = course;
            },
    }
};
</script>
