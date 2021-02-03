<template>
  <div>
      <!-- 父组件传值使用v-bind，接受子组件的值，子组件需要emit一个事件，然后父组件监听 -->
      <!-- 这里的v-model实际上隐含了这两步 -->
      <!-- <Ainput v-model="inputValue"></Ainput> -->
      父组件向子组件传递的值{{inputValue}}
      <!-- 子组件传值， 可通过父组件中转 -->
      <Ainput @input="handleInput"></Ainput>  
      Ashow接受<Ashow :value="inputValue"></Ashow>
  </div>
</template>

<script>
import Ainput from '_c/Ainput.vue';
import Ashow from '_c/Ashow.vue';


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
  methods:{
    handleInput(val) {
      this.inputValue = val;
    }
  }
}
</script>

<style>

</style>