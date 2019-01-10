<template>
	<div>
		header--{{myname}}
	</div>
</template>

<script >
	export default {

		props:["myname"]
	}
</script>

<style scoped>
	div{
		background-color: blue
	}
</style>