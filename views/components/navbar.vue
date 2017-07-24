<template>
    <div class="navbar-items">
    <h3>{{format(title)}}</h3>
        <ul class="nav-items">
            <li v-for="(item, index) in navlist" v-on:click="make_active_tab(index);" v-bind:class="{active : activetab === index}">
                <a v-show="index != 'type'"> {{format(index)}} </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['navlist', 'make_active_tab', 'activetab','format','title'],
}
</script>