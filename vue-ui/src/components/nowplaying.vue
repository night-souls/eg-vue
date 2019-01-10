<template>
	<div>
		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check = "false"
  infinite-scroll-distance="0">
			<li v-for="data in datalist" @click="handleClick(data.filmId)" :key="data.filmId">
					<img :src="data.poster"/>
					<h3>{{data.name}}</h3>
							</li>

			<!-- <router-link :to="'/detail/'+data.id" tag="li"></router-link> -->
		</ul>
	</div>
</template>

<script >
	import axios from "axios"
	export default {

		data(){
			return {
				datalist:[],
				loading:false,
				current:1,
				total:0
			}
		},

		mounted(){
			axios({
				url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7514007",
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then(res=>{
				console.log(res.data) //res.data 才是后端返回的接口 axios自己在外面包装的data
			
				this.datalist= res.data.data.films
				this.total  = res.data.data.total
			})
		},

		methods:{
			handleClick(id){
				//? route-link 声明式导航    <a href=""></a>
				//? this.$router.push 编程式导航  location.href
				// 路由get传参-1 -- 字符串
				//this.$router.push('/detail?id='+id); // /detail?id=111

				// 路由get传参-2 --对象
				//this.$router.push({ path: '/detail', query: { id: id }})

				// 动态路由-1  写字符串
				this.$router.push(`/detail/${id}`);	// /detail/11111
			
				// 动态路由-2  路由跳转 通过名字
				// this.$router.push({ name: 'detail', params: { kerwinid: id }})


			},

			loadMore(){
				console.log("到底了")
				//ajax
				
				if(this.total ==this.datalist.length){
					this.loading =true
					return;

				}

				this.current++;
				axios({
					url:`https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=7514007`,
					method: 'get',
					headers:{
						'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
						'X-Host': 'mall.film-ticket.film.list'
					}
				}).then(res=>{
					console.log(res.data) //res.data 才是后端返回的接口 axios自己在外面包装的data
					// [1,2,3] [4,5,6]
					this.datalist= [...this.datalist,...res.data.data.films]
				})
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