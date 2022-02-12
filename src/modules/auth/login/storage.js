import { setToken } from 'src/http'
import { LocalStorage } from 'quasar'

export const setHeaderAuthorization = (authorization) => setToken(authorization)
export const getLocalAuthorization = () => LocalStorage.getItem('authorization')
export const deleteLocalAuthorization = () => LocalStorage.remove('authorization')
export const setLocalAuthorization = authorization => LocalStorage.set('authorization', authorization)
export const getLocalUserID = () => LocalStorage.getItem('user_id')
export const deleteLocalUserID = () => LocalStorage.remove('user_id')
export const setLocalUserID = authorization => LocalStorage.set('user_id', authorization)
