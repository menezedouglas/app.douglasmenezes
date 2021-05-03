export default {
    errors: response => {
        switch (response.status) {
            case 422: {
                let messages = []
                Object.keys(response.body).map(input => {
                    messages.push({
                        bg: 'warning',
                        message: `${response.body[input][0]}`
                    })
                })
                return messages
            }
            default: {
                return {
                    bg: 'danger',
                    message: `${response.body.msg} ${response.body.error}`
                }
            }
        }
    }
}