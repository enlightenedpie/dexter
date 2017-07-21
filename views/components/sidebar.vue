<template>
	<div class="sidebar">
		<h3> {{format(title)}} </h3>
	    <ul>
	      <li v-for="(index, item) in sidelist"
	       v-on:click="make_active(item)" v-bind:class="{active : isactive === item}">
	        <a v-show="item != 'type'">{{format(item)}}</a>
		  </li>
	    </ul>
	</div>
</template>

<script>
export default {
    props: ['make_active', 'isactive', 'sidelist','format','title'],
}
</script>