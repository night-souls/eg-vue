<template>
	<div>
		<swipe class="my-swipe">
		  <swipe-item v-for="data in looplist" :key="data.bannerId">
		  	  <img :src="data.imgUrl"/>
		  </swipe-item>
		</swipe>

		<header v-show="isShow">电影</header>
		<ul :class="isShow?'fixedheader':''">
			<router-link to="/film/nowplaying" tag="li" activeClass="kerwinactive">正在热映</router-link>
			<router-link to="/film/comingsoon" tag="li" activeClass="kerwinactive">即将上演</router-link>
		</ul>


		<router-view></router-view>

	</div>
</template>

<script >
	import axios from "axios"
	import 'vue-swipe/dist/vue-swipe.css' //引入样式
	import { Swipe, SwipeItem } from 'vue-swipe';
	import { Indicator } from 'mint-ui';


	export default {

		// jsonp---->   前端jsonp(scritp src) ， 后端jsonp接口 返回格式kerwin("{'name':'aaaaa'}")
		// cors ----->  前端不做处理 $.ajax({url:"https://m.maizuo.com"})  后端加上 Access-Control-Allow-Origin: * ，卖座网站特殊 加了特殊的验证(来防我们)
		// 反向代理      前端可以配合反向代理服务器解决跨域（webpack-dev-server ,nginx）， 后端不做处理

		data(){
			return {
				looplist:[],
				isShow:false
			}
		},
		mounted(){
			//ajax, 事件绑定 ，10.2.153.15:8080
			// axios.get("/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res=>{
			// 	console.log(res);
			// }).catch(error=>{
			// 	console.log(error)
			// })
			// 
			// fetch("/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res=>res.text()).then(res=>{
			// 	console.log(res);
			// })
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});


			axios({
				url:"https://m.maizuo.com/gateway?type=2&k=4884329",
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1"}',
					'X-Host': 'mall.cfg.common-banner'
				}
			}).then(res=>{
				console.log(res.data) //res.data 才是后端返回的接口 axios自己在外面包装的data

				this.looplist=  res.data.data	

				setTimeout(() => {
				  Indicator.close();//
				}, 2000)

			})

			// fetch("https://m.maizuo.com/gateway?type=2&k=4884329",{
			// 	method:"get",
			// 	headers:{
			// 		'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1"}',
			// 		'X-Host': 'mall.cfg.common-banner'
			// 	}
			// }).then(res=>res.json()).then(res=>{
			// 	console.log(res);
			// })

			//axios.post axios.put 
			
			// $.ajax({
			// 	url:"",
			// 	headers:{

			// 	}
			// })  $.get  $.post
			// 
			

			window.onscroll = this.handleScroll
		},


		methods:{
			handleScroll(){
				console.log(document.documentElement.scrollTop);
				var oswiper=  document.querySelector(".my-swipe")
				// console.log(oswiper.offsetHeight);
				if(document.documentElement.scrollTop>=oswiper.offsetHeight){
					//显示header
					this.isShow = true
				}else{
					//隐藏header
					this.isShow= false
				}
			}
		},

		components:{

			"swipe":Swipe,
			"swipe-item":SwipeItem
		},

		destroyed(){
			//解绑事件
			window.onscroll=  null;
		}
	}
</script>

<style scoped lang="scss">

	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  img{
	  	width: 100%;
	  }
	}


	ul{
		display: flex;
		li{
			flex:1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: white;
		}
	}

	header{
		position:fixed;
		left:0px;
		top:0px;
		width: 100%;
		height: 50px;
		line-height:50px;
		background-color: white;
		text-align: center;
	}

	.fixedheader{
		position:fixed;
		top:50px;
		left:0px;
		height: 40px;
		width: 100%;
	}
</style>