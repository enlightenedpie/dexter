<template>
    <div class="videos">
        <ul>
            <li v-for="(item, index) in vidlist">
                <div class="other-vids">
                        <p v-bind:href="item.uri"> {{index}} </p>
                        <img class="thumbnails">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['vidlist', 'title']
    }
</script>