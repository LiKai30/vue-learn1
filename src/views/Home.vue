<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    函数形式路由组件传参{{ food }}
    <button @click="back('back')">返回</button>
    <button @click="back('push')">前进</button>
    <button @click="back('replace')">replace</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: {
    food: {
      type: String,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    back(type) {
      if(type === 'back'){
        this.$router.back()
      } else if(type === 'push') {
        // this.$router.push('/parent');
        this.$router.push({ 
          // 或者,两种方法互斥
          // path:'argus/123'
          name:'argus',
          params: {
            name: '123'
          }
        });
      } else {
        this.$router.replace({
          name:'parent',
          query: {
            name: '参数'
          }
        });
      }
      // push是加入历史记录，而replace是把当前历史记录替换
      // 注意params和query的区别
      // params是路由的一部分，必须在路由后面添加参数，且不显示参数名字
      // query是拼接的，没有也没关系，显示参数名字
    }
  }
}
</script>
