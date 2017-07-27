<template>
<!-- Renders a list of linked videos from JSON object -->
    <div id="parentdiv">
        <div id="video-holder">
            <iframe width="75%" height="540" :src="preplink(vidsrc.link)" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="sidebar">
            <ul>
              <li v-for="(index, item) in subtablist" v-on:click="make_active(item)" v-bind:class="{active : isactive === item}">
                <a v-show="item != 'type'">{{format(item)}}</a>
              </li>
            </ul>
        </div>
        <div class="linkeronis">
            <ul>
                <li v-for="(item, index) in vidlist" v-bind:class="{active : item.link === vidsrc.link}">
                    <a v-on:click="switch_vid(item); make_active_video(index)"> {{format(item.name)}} </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activevideo: '',
            }
        },
        methods: {
            make_active_video: function (item) {
                this.activevideo = item;
            },
            preplink: function (link){
                return link.replace("vimeo.com", "player.vimeo.com/video")
            }
        },
        props: ['vidlist', 'title', 'switch_vid', 'format', 'vidsrc', 'subtablist', 'isactive', 'make_active'],
        components: ['modal']
    }
</script>