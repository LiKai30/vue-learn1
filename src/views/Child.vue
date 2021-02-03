<template>
  <div>孩子组件</div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
      // 页面还没渲染，获取不到this
      alert(from.name)
      // 想要获取this , 则在next中使用vm代替
      next(vm => { // 这里的回调函数u会在页面渲染完调用
        console.log(vm);
      });
      // next();
    },

    beforeRouteLeave(to, from, next) {
      // 使用场景，未保存的时候的提醒
      const leave = confirm('你确定要离开吗');
      if(leave) {
        next()
      } else {
        next(false);  // 则不会跳转
      }
    }
}
</script>

<style>

</style>