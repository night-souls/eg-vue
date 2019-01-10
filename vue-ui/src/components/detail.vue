<template>
	
		<div v-if="filminfo">
			<img :src="filminfo.poster"/>
			<h2>{{filminfo.name}}</h2>


			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in filminfo.photos">
			    	
			    	<img :src="item"/>
			    </div>
			  </div>
			  <!-- Add Pagination -->
			  <div class="swiper-pagination"></div>
			</div>

			
		</div>

</template>

<script >
	import axios from "axios"
	import Swiper from "swiper"// 引入js
	import "swiper/dist/css/swiper.css"
	export default {

		data(){
			return {
				filminfo:null
			}
		},

		beforeMount(){

			//修改store中的 state里 isShow= false

			// this.$store.state.isShow = false
			this.$store.commit("hideMaizuoTabbar","1111");

			// 获取上个页面传来的动态路由参数
			console.log(this.$route.params) //req.params
			
			// 获取上个页面传来的get请求参数
			//console.log(this.$route.query);
			//
			axios({
				url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.kerwinid}&k=4031680`,
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.info'
				}
			}).then(res=>{
				console.log(res.data) //res.data 才是后端返回的接口 axios自己在外面包装的data
				this.filminfo = res.data.data.film
				//数据更新完 ，异步更新dom 节点

				this.$nextTick(()=>{
					console.log("上面的状态更新到dom节点中就会调用")
					//注意 ：避免swiper初始化过早
					var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 3,
					      spaceBetween: 30,
					      freeMode: true,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					    });	
				})
			})
		},

		mounted(){
			
		},


		beforeDestroy(){
			//修改store中state里isshow  true
			// this.$store.state.isShow = true
			this.$store.commit("showMaizuoTabbar");
		}
	}

	// req.body.list?"aaaa":'bbbb'
</script>

<style scoped>
	img{
		width: 100%;
	}

</style>