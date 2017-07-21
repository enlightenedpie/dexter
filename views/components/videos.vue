<template>
    <div class="videos">
        <ul>
            <li v-for="(item, index) in vidlist">
                <div class="other-vids">
                    <a @click="switch_vid(item.link)"> {{index}}
                        <img src="https://c3metrics.com/wp-content/uploads/2016/08/feature-video-thumbnail-overlay.png" class="thumbnails">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['vidlist', 'title', 'switch_vid']
    }
</script>