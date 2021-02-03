<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link :to="{ name:'about' }">About</router-link>
      <!-- to可以接受path， 也可以使用命名路由，可以使用对象的形式跳转到相应的组件 -->
    </div>

    <!-- 验证是否不支持嵌套路由 -->
    <!-- 过渡效果，指定key和name -->
    <transition-group name="router">
      <!-- <keep-alive> -->
        <router-view key='default'/> 
      <!-- </keep-alive> -->
      <!-- 命名视图 ：以相同的路径加载不同的组件-->
      <router-view name='email' key='email' /> 
      <router-view name='tel' key='tel'  /> 
    </transition-group>
  </div>
</template>

<script>
export default {
  '$route': (to) => {
    // name可以根据路由匹配
    to.query && to.query.transitionName && (this.name = to.query.transitionName);
  },
  data() {
    return {
      name: 'router'
    }
  }
}
</script> 

<style lang="less">

// name-类型
.router-enter { // 即将进入
  opacity: 0;
}

.router-enter-active { // 从无到有的过程
  transition: opacity 1s ease;
}

.router-enter-to { // 
  opacity: 1;
}


.router-leave { // 即将进入
  opacity: 1;
}

.router-leave-active { // 从无到有的过程
  transition: opacity 1s ease;
}

.router-leave-to { // 
  opacity: 0;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
