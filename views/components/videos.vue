<template>
<!-- Renders a list of linked videos from JSON object -->
    <div id="parentdiv">
        <div id="video-holder">
            <iframe width="75%" height="540" :src="vidsrc" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="sidebar">
            <h3> {{format(title)}} </h3>
            <ul>
              <li v-for="(index, item) in subtablist" v-on:click="make_active(item)" v-bind:class="{active : isactive === item}">
                <a v-show="item != 'type'">{{format(item)}}</a>
              </li>
            </ul>
        </div>
        <div class="linkeronis">
            <ul>
                <li v-for="(item, index) in vidlist">
                    <div class="other-vids">
                        <a v-on:click="switch_vid(item)"> {{format(item.name)}} </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['vidlist', 'title', 'switch_vid','format', 'vidsrc','subtablist','isactive','make_active']
    }
</script>