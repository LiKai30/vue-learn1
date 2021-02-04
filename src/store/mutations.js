import Vue from 'vue'

const mutations = {
  set_app_name(state, params) {
    // params是commit 提交的值，可以是对象
    state.appName = params;
  },
  // 动态添加state
  set_dramatic_state(state){
    Vue.set(state, 'newVal', '动态添加的值');
    // state.newVal = '动态添加的值' // 无效，是没有响应式处理，因为没有在state中定义，就像没有在date中定义一样
  }
}


export default mutations;