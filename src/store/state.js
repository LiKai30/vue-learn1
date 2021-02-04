/**
 * 全局共享的值
 * 通过this.$store.state.XXX 访问
 * 或者使用vuex提供的mapState方法访问,
 * mapState返回一个对象，接受一个数组/对象（属性值为回调函数，参数为state）
 */

const state = {
  name: 'name',
  appName: 'appName'
}

export default state;