import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001', 
  timeout: 10000
})

// request interceptor
service.interceptors.request.use(
  config => {
  
    /*if (exist token) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
      config.headers['Accept'] = 'application/json'
    }*/
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => response,
  /* {
    debugger
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }*/
  // },
  error => {
    // console.log('err' + error.response.status) // for debug
    const status = error.response.status
    if (status === 401 || status === 402) {
    }
    return Promise.reject(error)
  }
)

export default service
