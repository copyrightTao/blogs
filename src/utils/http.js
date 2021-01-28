import axios from "axios";
const env = process.env.NODE_ENV
axios.interceptors.response.use(
  res => {
    // Resolve
    // 二次验证
    // const data = res.data
    // if (data.hasOwnProperty('success') && data.success === false) {
    //   data.config = res.config
    //   return Promise.reject(data)
    // }
    return res
  },
  err => {
    // Reject
    if (err && err.response) {
      // 接口异常
      err.url = (err.response.request && err.response.request.responseURL) || ''
      // const errCode = err.response.status
      const data = err.response.data
      err.message = (data && (data.msg || data.message)) || err.message
      if (err.message.includes('token') &&
        process.env.NODE_ENV !== 'development'
      ) {
        // token失效
        const auth = Common.getCookie('INNER_AUTHENTICATION')
        let token
        try {
          token = auth && atob(auth)
        } catch (e) {
          token = null
        }
        if (
          !token ||
          err.message.includes('token')
        ) {
          // 关键字 --|||
          err.entry = true
        } else {
          err.reload = true
        }
      }
      err.message.includes('cookie[INNER_AUTHENTICATION]') &&
        process.env.NODE_ENV !== 'development' &&
        (err.entry = true)
    } else {
      // xhr异常
      process.env.NODE_ENV !== 'development' && (err.reload = true) // 尝试刷新当前页
    }
    return Promise.reject(err)
  },
)