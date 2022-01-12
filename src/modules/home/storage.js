import { LocalStorage } from "quasar"
import * as keys from './storageKeys'

export const setVerticalScroll = val => LocalStorage.set(keys.VERTICAL_SCROLL, val)
export const getVerticalScroll = () => parseFloat(LocalStorage.getItem(keys.VERTICAL_SCROLL))
