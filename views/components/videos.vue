<template>
    <div class="recent-and-recommended">
        <div class="recommended">
            <h3> Recommended Videos </h3>
            <ul v-for="(item, index) in user.courses">
                <li v-for="(subitem, subindex) in item.recommended">
                    <a v-bind:href="subitem.uri">
                    <a v-if="index === currentcourse">
                    <img class="thumbnails" v-bind:src="subitem.thumbnail">
                    {{subitem.name}}</a>
                    </a>
                </li>
            </ul>
        </div>
        <div class="recent">
            <h3> Recently Watched </h3>
            <ul>
                <li v-for="(item, index) in user.videos.recentlyWatched">
                    <a v-bind:href="item.uri">
                    <img class="thumbnails" v-bind:src="item.thumbnail">
                    {{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse']
    }
</script>