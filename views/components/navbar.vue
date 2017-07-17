<template>
    <div id="NavBar" class="navbar">
        <h3>{{currentcourse}}</h3>
        <a>
            <ul v-for="(item, index) in user.courses">
                <li v-for="(subitem, subindex) in item.subjects">
                    <a v-if="index === currentcourse">{{subitem}}</a>
                </li>
            </ul>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse']
    }
</script>

<style>
    .navbar {

    }
</style>