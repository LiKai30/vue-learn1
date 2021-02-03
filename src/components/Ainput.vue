<template>
  <div>
    <input @input="handleInput" :value="value" />
  </div>
</template>

<script>
export default {
  name:'Ainput',
  props:{
    value:[String, Number],
    default:''
  },
  methods:{
    handleInput(event) {
      const value = event.target.value;
      // 子组件修改父组件传来的值
      this.$emit('input', value);
    }
  }
}
</script>

<style>

</style>