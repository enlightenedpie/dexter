<template>
<!-- Renders a list of linked videos from JSON object -->
    <div id="parentdiv">
        <div id="video-holder">
            <iframe height="540" v-bind="{width: returnwidth()}" :src="preplink(vidsrc.link)" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-if="activetab != 'dashboard'">
            <div v-bind="{style: returnright()}" class="sidebar">
              <li v-for="(item, index) in subtablist" v-on:click="make_active(index)" v-bind:class="{active : isactive === index}">
                <a v-show="index != 'type'">{{format(index)}}</a>
                <p class="video-number">{{item.length}} Videos</p>
              </li>
            </div>
            <div class="linkeronis" v-if="vidlist">
                <li v-for="(item, index) in vidlist" v-bind:class="{active : item.link === vidsrc.link}" v-on:click="switch_vid(item); make_active_video(index)">
                    <div class="subvideo-holder">
                        <p> {{format(item.name)}}</p>
                        <img class="thumbnails" :src="item.pictures.link">
                        <div class="time-holder">
                            <p class="times"> {{temporize(item.duration)}} </p>
                        </div>
                    </div>
                </li>
            </div>
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
            temporize : function(seconds){
                return new Date(seconds * 1000).toISOString().substr(11, 8).replace("00:0", "").replace("00:", "");
            },
            make_active_video: function (item) {
                this.activevideo = item;
            },
            preplink: function (link){
                return link.replace("vimeo.com", "player.vimeo.com/video")
            },
            returnwidth: function(){
                if (this.activetab === 'dashboard'){
                    return '100%'
                }
                else if (!this.vidlist){
                    return '87.5%'
                }
                else {
                    return '75%'
                }
            },
            returnright: function(){
                if (!this.vidlist){
                    return 'right:0;'
                }
                else {
                    return 'right:12.5%;'
                }
            }
        },
        props: ['vidlist', 'title', 'switch_vid', 'format', 'vidsrc', 'subtablist', 'isactive', 'make_active', 'activetab'],
        components: ['modal']
    }
</script>