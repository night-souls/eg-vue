// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import MyObjA from './module/moduleA' // 导入的是所有的
// import mymoduleB, {obj as myobj} from './module/moduleB' //导入某几个接口 某几个方法
// console.log(mymoduleB,myobj)
import App from './App' //app.vue 是单文件组件
import router from './router'
import store from './store'
// var vue =require("vue");

// Vue.config.productionTip = false


/* 引入 element UI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*引入 mint UI*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(ElementUI);//注入插件
Vue.use(MintUI);//注入插件

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // this.$router
  store, //讲自定义的store对象 与vue实例结合起来了，在任意的组件中 访问 this.$store
  components: { App },
  template: '<App/>'
})

// var hello = {
// 	template:`<div>局部组件</div>`
// }

// new Vue({
// 	el:"#app",
// 	components:{
// 		hello
// 	},
// 	template:"<hello></hello>"
// })