export const showError = error => {
    if(error.data.msg) {
        alert(`${error.data.msg} ${error.data.error}`)
    } else {
        Object.keys(error.data).map(name => {
            error.data[name].map(message => {
                alert(message)
            })
        })
    }
}
