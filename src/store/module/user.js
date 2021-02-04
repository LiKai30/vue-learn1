/**
 * vuex的模块化
 * 用户相关的模块
 */

const state = {
  userName: 'user'
}

const mutations = {
  set_user_name(state, val) {
    state.userName = val;
  }
}

const actions = {
  // rootSate跟实例上的state，在这里是全局state
  // updateUserName({commit, state, rootSate, dispatch}) {
  //     dispatch('xxx', 'val');
  // }
  xxx(){

  }
}

export default {
  // 启用了命名空间的 getter 和 action 会收到局部化的 getter
  // namespaced: true, // 因为现在的store被划分成了多模块,每一个模块都有自己的state,需要区分
  state,
  mutations,
  actions
}
