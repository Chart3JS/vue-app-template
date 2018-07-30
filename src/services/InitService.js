import Api from '@/services/Api'

export default {
  login (userLogin) {
    return Api().post('/login', userLogin)
  }
}
