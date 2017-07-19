<template>
	<div class="sublist-dropdown">
	    <ul>
	      <li v-for="(index, item) in sidelist"
	       v-on:click="makeactivesubtab(item)" v-bind:class="{active : activesubtab === item}">
	        <a v-show="item != 'type'" > {{item | capitalize}}</a>
	      </li>
	    </ul>
	</div>
</template>

<script>
export default {
	props: ['makeactivesubtab','activesubtab','sidelist']
}
</script>