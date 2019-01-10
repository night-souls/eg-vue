import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Film from "../components/film"
import Cinema from "../components/cinema"
import Detail from "../components/Detail"
import Center from "../components/center"
import Login from "../components/login"
import Nowplaying from "../components/nowplaying"
import Comingsoon from "../components/comingsoon"
Vue.use(Router) //Vue.use() 明确地安装路由功能

const router =  new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home
    },
    {
      path: '/film',
      component: Film,
      children: [
      	{
      		path: 'nowplaying', // /film/
      		component:	Nowplaying
      	},
      	{
      		path: 'comingsoon',
      		component:  Comingsoon
      	},
      	{
      		path: '',
      		redirect: '/film/nowplaying'
      	} //重定向 
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
      {
      path: '/login',
      component: Login
    },
    //    {
    //   name:"detail",
    //   path: '/detail', // 固定路由 /detail
    //   component: Detail
    // },
     {
      name:"detail",
      path: '/detail/:kerwinid', //动态路由 /detail/1111
      component: Detail
    },
    {
      path: '*',
      redirect: '/film/nowplaying'
    } //重定向
   ]
})

/*
router.get("/")
router.get("/film")
router.get

 */
//全局的路由
router.beforeEach((to, from, next) => {
  // ...
  next();
})

export default router;
