<template lang="html">

	<div>

		<div class="tabs">
			<li v-for="tab in tabs"> 
				<a href ="#"> {{tab.name}} </a>
			</li>

		</div>

		<div class="tab-details">

		<slot> </slot>

		</div>

	</div>





</template>