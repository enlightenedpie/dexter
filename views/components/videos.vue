<template>
    <div class="recent-and-recommended">
        <div class="recommended">Recommended Videos
            <ul v-for="(item, index) in user.courses">
                <li v-for="(subitem, subindex) in item.recommended">
                    <a v-if="index === currentcourse">
                    <img v-bind:src="subitem.thumbnail">
                    <a v-bind:href="subitem.uri">{{subitem.name}}</a>
                    </a>
                </li>
            </ul>
        </div>
        <div class="recent">Recently
            <ul v-for="(item, index) in user.videos.recentlyWatched">
                <li>
                    <img v-bind:src="item.thumbnail">
                    <a v-bind:href="item.uri">{{item.name}}</a>
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