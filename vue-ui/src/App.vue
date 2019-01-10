<template>
  <div>
<!--       <ul>
        <li><a href="/#/film">films</a></li>
        <li><a href="/#/cinema">cinemas</a></li>
        <li><a href="/#/center">centers</a></li>
      </ul> -->

      <tabbar v-show="$store.state.isShow"></tabbar>


      <!-- 路由容器 -->
      <section>
        <router-view></router-view>
      </section>
  </div>
</template>

<script>
  import tabbar from './components/tabbar'// 注册成自己的组件 
  // console.log(navbar);
  // Vue.comppnent("navbar")

  export default {

    data(){
      return {
        
      }
    },

    computed:{

    },

    methods:{
      
    },

    components:{
      tabbar
    },

    watch:{

    }
  }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }

  html,body{
    height: 100%;
  }

  li{
    list-style: none;
  }

  .kerwinactive{
    color: red;
  }

  section{
    margin-bottom: 50px;
  }
</style>

