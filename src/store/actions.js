// 异步修改state
import { getName } from '@/api/app'
const actions = {
  // 实际上获取是store对象
  // updateName({ commit }) {
    // getName().then(res => {
    //   commit('set_app_name', res.info.name)
    // }).catch(err => {
    //   console.log(err)
    // })

    // 使用async
  async updateName({ commit }) { 
    try {
      const { info : { name }} = await getName();
      commit('set_app_name', name);
    } catch (err) {
      console.log(err)
    }
  }

}

// export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同
// 而export default命令对外输出的变量名可以是任意的，这时import命令后面，可以不使用大括号。
// 命令用于指定模块的默认输出，有且仅有一个
export default actions;