<template>
	<div>
		comigsoon

		<ul>
			<li v-for="data in datalist">
				<img :src="data.poster"/>
				<h3>{{data.name}}</h3>
			</li>
		</ul>
	</div>
</template>

<script >
	import {mapState} from "vuex"
	export default {


		mounted(){
			console.log("comingsoon 进来了")
			// axios.ge
			
			if(this.$store.state.datalist.length==0){
				//ajax异步请求数据 
				this.$store.dispatch("getComingSoonListRequest")
			}else{
				console.log("复用store中的数据 不再请求了")
			}
		},

		// computed:{
		// 	kerwin(){
		// 		return "111111"
		// 	},
		// 	mydatalist(){
		// 		return this.$store.state.datalist
		// 	}
		// }
		// computed:mapState(["datalist"])   {datalist(){return }}
		
		computed:{
			//展开运算符
			...mapState(["datalist"]),

			kerwin(){
				return "1111111"
			}
		}
	}
</script>

<style scoped lang="scss">
ul{
	li{
		overflow: hidden;
		padding:10px;
		img{
			float:left;
			width:100px;
		}
	}
}

</style>