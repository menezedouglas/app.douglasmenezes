export default {
  extends: (main = {}, another = {}) => {
    // eslint-disable-next-line array-callback-return
    Object.keys(another).map(key => {
      main[key] = another[key]
    })
  }
}
