<template>
<div>
  <div>命名视图匹配：email</div>
  <div>
    跨组件传递
    <button @click="handhleClick">传递给tel</button>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    handhleClick() {
      this.$bus.$emit('on-click', '我来自email')
    }
  }
}
</script>

<style>

</style>