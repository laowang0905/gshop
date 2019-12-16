import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      let str = ''
      Object.keys(data).forEach(key => {
        str += `${key}=${data[key]}&`
      })
      if (str) {
        url = `${url}?${str.substring(0, str.lastIndexOf('&'))}`
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      console.log(errot)
    })
  })
}
