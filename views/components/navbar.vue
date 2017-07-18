<template>
    <div>
        <div id="NavBar" class="navbar">
            <h3>{{currentcourse}}</h3>
        </div>
        <div id="navbar-items">
                <ul v-for="(item, index) in user.courses">
                    <li v-for="(subitem, subindex) in item.subjects">
                        <a v-show="index === currentcourse">{{subitem}}</a>
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