export default {
  format: {
    value (val) {
      const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2
      })

      return currency.format(val/100)
    }
  }
}
