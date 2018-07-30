import axios from 'axios'
// http://54.76.172.24:9080/api
export default() => {
  return axios.create({
    baseURL: 'http://54.76.172.24:9080/api',
    withCredentials: false,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  })
}
