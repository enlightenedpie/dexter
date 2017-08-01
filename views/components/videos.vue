<template>
<!-- Renders a list of linked videos from JSON object -->
    <div id="parentdiv">
        <div id="video-holder">
            <iframe width="75%" height="540" :src="preplink(vidsrc.link)" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="sidebar">
<<<<<<< HEAD
            <ul>
              <li v-for="(index, item) in subtablist" v-on:click="make_active(item)"
                  v-bind:class="{active : isactive === item}">
                <a v-show="item != 'type'">{{format(item)}}</a>
              </li>
            </ul>
        </div>
        <div class="linkeronis">
            <ul>
                <li v-for="(item, index) in vidlist" v-bind:class="{active : item.link === vidsrc.link}"
                    v-on:click="switch_vid(item); make_active_video(index)">
                    <div class="subvideo-holder">
                        <p> {{format(item.name)}}</p>
                        <img class="thumbnails" :src="item.pictures.link">
                        <div class="time-holder">
                            <p class="times"> {{temporize(item.duration)}} </p>
                        </div>
=======
          <li v-for="(index, item) in subtablist" v-on:click="make_active(item)" v-bind:class="{active : isactive === item}">
            <a v-show="item != 'type'">{{format(item)}}</a>
          </li>
        </div>
        <div class="linkeronis">
            <li v-for="(item, index) in vidlist" v-bind:class="{active : item.link === vidsrc.link}" v-on:click="switch_vid(item); make_active_video(index)">
                <div class="subvideo-holder">
                    <p> {{format(item.name)}}</p>
                    <img class="thumbnails" :src="item.pictures.link">
                    <div class="time-holder">
                        <p class="times"> {{temporize(item.duration)}} </p>
>>>>>>> 31a1ee675d25e1b61fc1219a7b7be47f3cd39ad8
                    </div>
                </div>
            </li>
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
            }
        },
        props: ['vidlist', 'title', 'switch_vid', 'format', 'vidsrc', 'subtablist', 'isactive', 'make_active'],
        components: ['modal']
    }
</script>