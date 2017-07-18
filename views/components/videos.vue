<template>
    <div class="videos">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item, index) in vidlist">
                <div class="other-vids">
                     <a v-bind:href="item.uri">
                        <p v-bind:href="item.uri"> {{item.name}} </p>
                        <img class="thumbnails" v-bind:src="item.thumbnail">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse', 'vidlist', 'title']
    }
</script>