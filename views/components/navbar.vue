<template>
    <div class="navbar-items">
        <ul class="nav-items">
            <li v-for="(item, index) in navlist" v-on:click="makeactivetab(index);"
                v-bind:class="{active : activetab === index}">
                <a v-show="index != 'type'"> {{index}} </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['navlist', 'makeactivetab', 'activetab']
    }
</script>