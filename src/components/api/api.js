import request from 'utils/request'
import bus from 'components/bus/bus'

const baserUrl = 'http://oldcat.online:8086/'
const CiBaseUrl = 'http://oldcat.online:8087/'

function errApi(res) {
  if (res) {
    let err = res.data.response.data
    if (res.code && res.code == '') {
      bus.$notify({
        title: '提示',
        message: err.message,
        type: 'error',
      })
    }
  }
}

export function userLogin(phonenumber, password, code) {
  return request({
    url: baseUrl + '',
    method: 'post',
    timeout: 5000,
    data: {
      phoneNumber: phonenumber,
      passWord: password,
      code: code,
    },
  }).catch((res) => {
    if (res) errApi(res)
  })
}

// 验证码请求
export function sendCode() {
  return request({
    url: baserUrl + '',
    method: 'post',
    timeout: 65000,
    data: {},
  }).catch((res) => {
    if (res) errapi(res)
  })
}
