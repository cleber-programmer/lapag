class Dia {
  constructor (date) {
    this.__oneOff__ = { date }
    return this
  }

  toString () {
    var dia = this.__oneOff__.date.getDate()
    var ano = this.__oneOff__.date.getFullYear()
    var mes = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ][this.__oneOff__.date.getMonth()]
    return `${dia}/${mes}/${ano}`
  }
}

export default Dia
