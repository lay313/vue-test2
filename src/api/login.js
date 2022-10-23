/* import request from '../../vite.config'
// 登录
export function login(data) {
  return request({
    url: '/bos/authentication/login',
    method: 'post',
    data
  })
}
// 获取登录用户信息
export function getInfo(params) {
  return request({
    url: '/bos/authentication/info',
    method: 'get',
    params,
    headers: {
      'Authorization': JSON.parse(localStorage.Authorization)
  }
  })
} */

export default {
  liebiao: {
    getList: {
      method: 'post',
      url: '/api/bos/web/order/query'
    }
  }
}

