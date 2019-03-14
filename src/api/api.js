var axios = require('axios')
var ES6Promise = require('es6-promise')
ES6Promise.polyfill()
const ApiService = {
    get( apiurl) {
      return axios.get(apiurl)
      .then(response => {
          return response.data
        })
        .catch(response => {
            return response.data
        })
    },

    post( apiurl,bodyFormData) {
        return axios.post(apiurl,bodyFormData)
        .then(response => {
            return response
          })
        .catch(err => console.log(err))
    }
}
  export default ApiService



export const userModule = {
  getUser() {
    return ApiService.get( 'http://jsonplaceholder.typicode.com/posts/' )
  },
  selectedUser(user) {
    return ApiService.get( 'http://jsonplaceholder.typicode.com/posts/'+user)
  },

  addUser(user) {
    return ApiService.post( 'http://jsonplaceholder.typicode.com/posts/',user)
  }
}
