<template>
  <div>
      <!-- 父组件传值使用v-bind，接受子组件的值，子组件需要emit一个事件，然后父组件监听 -->
      <!-- 这里的v-model实际上隐含了这两步 ，但是如果是store不能这么做，因为state中的值不能通过直接赋值的形式修改-->
      <!-- <Ainput v-model="inputValue"></Ainput> -->
      父组件向子组件传递的值{{inputValue}}
      <!-- 子组件传值， 可通过父组件中转 -->
      <Ainput @input="handleInput"></Ainput>  
      Ashow接受<Ashow :value="inputValue"></Ashow>


      <h3>
        访问store：{{name}}
      </h3>
      <h3>
        访问store模块：{{userName}}
      </h3>
      <p>appName使用getter：{{appNameWithVersion}}</p>
      <button @click="editStore">修改state中的name为李凯</button>
  </div>
</template>

<script>
import Ainput from '_c/Ainput.vue';
import Ashow from '_c/Ashow.vue';
import { mapGetters, mapState, mapActions } from 'vuex';


export default {
  name: 'store',
  components:{
    Ainput,
    Ashow,
  },
  data() {
    return {
      inputValue:'',

    }
  },
  computed:{
    ...mapState([
      'userName', // 如果加上了命名空间，需要加上模块名。
      'name'  // 全局state
    ]),

    // ...mapState('user', {   // 需要开启命名空间
    //   userName: state => state.userName
    // })
    // 或者定义getter，在getter方法里进行映射state.user.userName
    // ...mapState({   // 不建议这样使用
    //   userName: state => state.user.userName
    // }),

    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // },
    // 或者
    ...mapGetters([
      'appNameWithVersion'
    ]),

    // 计算属性的get和set
    val:{
      set:function (newValue, oldValue) {
        // 计算属性改变的时候改变data
        this.inputValue = newValue;
      },

      get:function () {
        // 计算属性改变的时候改变data
        return this.inputValue + 'with getter';
      },
    }

  },
  methods:{
    ...mapActions([
      'updateName'
    ]),
    handleInput(val) {
      this.inputValue = val;
    },
    editStore(){
      // this.$store.commit('set_dramatic_state');

      // this.$store.commit('set_app_name', this.$store.state.newVal);
      this.updateName();
    },
  }
}
</script>

<style>

</style>