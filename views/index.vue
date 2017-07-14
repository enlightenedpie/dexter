<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <div id="toolbar">
         <button id='modal-button' @click="showModal = true"> Menu </button>
                <modal v-if="showModal" @close="showModal = false" :user="user"> </modal>
            </div>

    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data: function() {
        return {
        }
    }
}
let curCourse = new Vue ({
    el: ".maindiv",
    data: {
        currentCourse: "ACT"
    }
});
const menuModal = new Vue ({
    el: "#toolbar",
    data: {
        showModal: false
    }
});
</script>

