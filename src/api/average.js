import request from './request'

export function Get() {
  return request({
    url: '/average',
    method: 'get'
  })
}