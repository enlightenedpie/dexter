<template lang="html">
    <ul>
		<li>

		<!-- MODAL BUTTON -->
		<button id='modal-button' @click="showModal = true"> Menu </button>
			<modal v-if="showModal" @close="showModal = false"> </modal>
  		<!-- MODAL END -->

		<li> Supertutortv </li>
		<li> Hi, {{userData.profile.firstName}} </li>
	</ul>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<style lang="css">
</style>
