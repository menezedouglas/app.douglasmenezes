export default {
    capitalize: str => {
        if(typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase());
        } else {
            return '';
        }
    },
    onlyNumbers: str => {
        return str.replace(/[^0-9]/g,'')
    }
}
