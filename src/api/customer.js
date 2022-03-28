import request from './request'

export function Get() {
  return request({
    url: '/customers',
    method: 'get'
  })
}

export function Create(data) {
    return request({
      url: '/customers',
      method: 'post',
      data
    })
}