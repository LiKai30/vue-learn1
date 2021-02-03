<template>
  <!-- <div>动态路由参数：{{ $route.params.name }}</div> -->
  <!-- 路由组件传参 -->
  <div>{{name}}</div>

</template>

<script>
export default {
  props:{ // 可接受动态路由参数
    name: {
      type: [String, Number],
      defalut:'默认值'
    }
  }
}
</script>

<style>

</style>