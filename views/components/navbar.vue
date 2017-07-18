<template>
    <div>
        <div id="NavBar" class="navbar">
            <h3>{{currentcourse}}</h3>
        </div>
        <div id="navbar-items">
                <ul v-for="(item, index) in user.courses">
                    <li v-if="index === currentcourse" v-bind:class="{active: index === currentcourse}" v-for="(subitem, subindex) in item.subjects">
                        <a>{{subitem}}</a>
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

<style>
    .navbar {

    }
</style>