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
                    <a v-on:click="switch_vid(item); make_active_video(index)"> 
                        <p> {{format(item.name)}} </p>
                        <img class="thumbnails" :src="item.pictures.link">
                        <p> {{temporize(item.duration)}} </p>
                     </a>
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
            temporize: function(item) {
                var hours = Math.floor(item / 3600);
                var minutes = Math.floor(item / 60);
                var seconds = item - minutes * 60;
                if (hours != 0 && minutes != 0) {
                    var coolString = hours + ":" + minutes + ":" + seconds
                } else if (hours == 0){
                    var coolString = minutes + ":" + seconds
                } else {
                    var coolString = seconds + "s"
                }
                return coolString
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