<template>
<div>
  <div>命名视图匹配：tel组件</div>
  <div>
    接受email的值：
    <span>{{ message }}</span>
  </div>
</div>
</template>

<script>
export default {
  mounted(){
    // 注意区分，这是在当前实例上监听这个事件
    // this.$on('on-click', mes)
    this.$bus.$on('on-click', mes => {
      // 事件重名怎么办？
      this.message = mes;
    })
  },
  data(){
    return {
      message:'',
    }
  }
}
</script>

<style>

</style>