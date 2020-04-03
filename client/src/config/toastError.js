// const errors = {
//   user: {
//     not_found: 'User not found',
//   }
// }
import { Toast } from 'mint-ui'

function toastError(error = {}, errorMap = {}) {
  // if (error.password === 'invalid') {
  //   Toast('Password invalid')
  // }

  // if (error.user === 'not_found') {
  //   Toast('User not found')
  // }

  // if (error.name === 'invalid') {
  //   Toast('Name invalid')
  // }
  Object.keys(error).forEach(key => {
    let value = error[key];
    if (errorMap[key] && errorMap[key][value]) {
      Toast(errorMap[key][value]);
    }
  })
}

export default {
  toastError,
}
