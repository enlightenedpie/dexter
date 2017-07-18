<template>
    <div>
        <div>
            <div class="recommended">Recommended Videos
                <a>
                    <ul v-for="(item, index) in user.courses">
                        <li v-for="(subitem, subindex) in item.recommended">
                            <a v-if="index === currentcourse" v-bind:href="subitem.uri"><button class="recent"></button>{{subitem.name}}</a>
                        </li>
                    </ul>
                </a>
            </div>
        </div>
        <div>
            <div>
                <div class="recent">Recently Watched
                    <a>
                        <ul v-for="(item, index) in user.videos.recentlyWatched">
                            <a v-bind:href="item.uri"><button class="recent"></button>{{item.name}}</a>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse']
    }
</script>