export default {
  format (format = 'd/m/Y', date) {
    switch (typeof date) {
      case 'string': {
        const dateParsed = new Date(date)

        const dt = {
          d: (dateParsed.getDate() < 10) ? `0${dateParsed.getDate()}` : dateParsed.getDate(),
          m: (dateParsed.getMonth() + 1 < 10) ? `0${dateParsed.getMonth() + 1}` : dateParsed.getMonth() + 1,
          y: dateParsed.getFullYear(),
          h: (dateParsed.getHours() < 10) ? `0${dateParsed.getHours()}` : dateParsed.getHours(),
          i: (dateParsed.getMinutes() < 10) ? `0${dateParsed.getMinutes()}` : dateParsed.getMinutes(),
          s: (dateParsed.getSeconds() < 10) ? `0${dateParsed.getSeconds()}` : dateParsed.getSeconds()
        }

        let response = ``

        const dateDivisors = '/,-'.split(',')

        let separator = ``

        if(format.indexOf(' ') >= 0) {
          let formats = format.split(' ')

          dateDivisors.map(divisor => {
            if(formats[0].indexOf(divisor) >= 0) {
              separator = divisor
              return false
            }
          })

          formats[0] = formats[0].split(separator)

          if(formats.length > 1) {
            formats[1] = formats[1].split(':')
          }

          formats[0].map((key, index) => {
            response += dt[key.toLowerCase()].toString()

            if(index >= formats[0].length) response += separator
          })

          if(formats.length > 1) {
            response += ` `

            formats[1].map((key, index) => {
              response += dt[key.toLowerCase()].toString()

              if(index >= formats[0].length) response += `:`
            })
          }
        } else {
          dateDivisors.map(divisor => {
            if(format.indexOf(divisor) >= 0) {
              separator = divisor
              return false
            }
          })

          format = format.split(separator)

          format.map((key, index) => {
            response += dt[key.toLowerCase()].toString()

            if(index + 1 < format.length) response += separator
          })
        }

        return response
      }
    }
  }
}
