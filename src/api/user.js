import request from './request'

export function Get() {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function Create(data) {
    return request({
      url: '/user',
      method: 'post',
      data
    })
}