import Api from '@/services/Api'

export default {
  register (credential) {
    return Api().post('register', credential)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
