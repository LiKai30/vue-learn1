// 相当于计算属性

const getters = {
  appNameWithVersion: (state) => {
    return state.appName + 'v2.0'
  }
}


export default getters;