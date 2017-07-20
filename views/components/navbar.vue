<template>
    <div class="navbar-items">
        <ul class="nav-items">
            <li v-for="(item, index) in navlist" v-on:click="make_active_tab(index);"
                v-bind:class="{active : activetab === index}">
                <a v-show="index != 'type'"> {{index | capitalize}} </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['navlist', 'make_active_tab', 'activetab'],
        filters: {
            capitalize(title) {
                return title.charAt(0).toUpperCase() + title.slice(1);
            }
        }
    }
</script>