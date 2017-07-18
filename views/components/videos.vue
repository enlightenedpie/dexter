<template>
    <div class="videos">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item, index) in vidlist">
                <a v-bind:href="item.uri">
                    <img class="thumbnails" v-bind:src="item.thumbnail">
                    {{item.name}}</a>
            </li>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse', 'vidlist', 'title']
    }
</script>