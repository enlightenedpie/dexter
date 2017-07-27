<template>
<!-- Renders a list of linked videos from JSON object -->
    <div class="pagecontent">
        <ul>
            <li v-for="(item, index) in vidlist">
                <div class="other-vids">
                    <a v-on:click="switch_vid(item)"> {{format(item.name)}}
                        <img src="https://c3metrics.com/wp-content/uploads/2016/08/feature-video-thumbnail-overlay.png" class="thumbnails">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['vidlist', 'title', 'switch_vid','format']
    }
</script>