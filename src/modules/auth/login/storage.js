import { setToken } from '../../../http'

export const setHeaderAuthorization = (authorization) => setToken(authorization)
export const getLocalAuthorization = () => localStorage.getItem('authorization')
export const deleteLocalAuthorization = () => localStorage.removeItem('authorization')
export const setLocalAuthorization = authorization => localStorage.setItem('authorization', authorization)
export const getLocalUserID = () => localStorage.getItem('user_id')
export const deleteLocalUserID = () => localStorage.removeItem('user_id')
export const setLocalUserID = authorization => localStorage.setItem('user_id', authorization)
