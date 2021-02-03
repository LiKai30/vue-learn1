<template>
  <div>路由组件传参：{{ food }}</div>
</template>

<script>
export default {
  props: {
    food:{
      type:String,
      default:'默认值'
    }
  }
}
</script>

<style>

</style>
