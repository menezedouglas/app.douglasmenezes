export default {
    errors: response => {
        const request = response.request
        switch (request.status) {
            case 422: {
                let messages = []
                Object.keys(request.response).map(input => {
                    messages.push({
                        bg: 'warning',
                        message: `${request.response[input][0]}`
                    })
                })
                return messages
            }
            default: {
                return {
                    bg: 'negative',
                    message: `${request.response.msg} ${request.response.error}`
                }
            }
        }
    },
    toGet: data => {
        let response = `?`

        Object.keys(data).map((key, index) => {
            response += `${key}=${data[key]}`
            if(index + 1 < Object.keys(data).length) {
                response += `&`
            }
        })

        return response
    }
}
