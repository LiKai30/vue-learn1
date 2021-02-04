import axios from './index'



export const getUserInfo = ({ userId }) => {
  console.log('封装的axios请求')
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data:{
      userId,
    }
  })
}