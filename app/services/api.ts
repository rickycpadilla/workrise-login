import axios from 'axios'

import { AUTH_API_KEY } from '../../secrets'

const AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts'

export default {

  userSignup: async (email: string, password: string): Promise<string|null> => {
    const method = 'post'
    const url = `${AUTH_URL}:signUp?key=${AUTH_API_KEY}`
    const data = {
      email,
      password,
      returnSecureToken: true,
    }
    const payload = await axios({ method, url, data })
    return payload?.data?.localId
  },

  userLogin: async (email: string, password: string): Promise<string|null> => {
    const method = 'post'
    const url = `${AUTH_URL}:signInWithPassword?key=${AUTH_API_KEY}`
    const data = {
      email,
      password,
      returnSecureToken: true,
    }
    const payload = await axios({ method, url, data })
    return payload?.data?.localId
  },

  checkIfUserExists: async (email: string): Promise<boolean> => {
    const method = 'post'
    const url = `${AUTH_URL}:createAuthUri?key=${AUTH_API_KEY}`
    const data = {
      identifier: email,
      continueUri: 'http://localhost', // TODO: Update for production
    }
    const payload = await axios({ method, url, data })
    return payload?.data?.registered === true
  }

}
