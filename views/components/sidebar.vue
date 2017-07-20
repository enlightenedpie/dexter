<template>
	<div class="sublist-dropdown">
	    <ul>
	      <li v-for="(index, item) in sidelist"
	       v-on:click="make_active(item)" v-bind:class="{active : isactive === item}">
	        <a v-show="item != 'type'" > {{item | capitalize}}</a>
	      </li>
	    </ul>
	</div>
</template>

<script>
export default {
    props: ['make_active', 'isactive', 'sidelist'],
    filters: {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
}
</script>