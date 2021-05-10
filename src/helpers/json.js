export default {
    extends: (main = {}, another = {}) => {
        Object.keys(another).map(key => {
            main[key] = another[key]
        })
    }
}
