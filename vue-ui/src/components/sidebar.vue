<template>
	<div>
		sidebar
		<slot></slot>

		<ul>
			<li>kerwin</li>
		</ul>
	</div>
</template>

<script >
	export default {
		
	}
</script>

<style scoped lang="scss">
	div{
		background-color: yellow;
	
		ul{
			li{
				color:red;
			}
		}
	}
</style>
