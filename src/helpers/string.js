export default {
    capitalize: str => {
        if(typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase());
        } else {
            return '';
        }
    }
}
