class Agenda {
  get cliente () {
    return this.__oneOff__.client
  }
  
  get servico () {
    return this.__oneOff__.service
  }

  get profissional () {
    return this.__oneOff__.professional
  }

  get dia () {
    return this.__oneOff__.day
  }

  get hora () {
    return this.__oneOff__.hour
  }

  constructor (client, service) {
    this.__oneOff__ = { client, service }
    return this
  }

  com_a (professional) {
    this.__oneOff__ = { professional, ...this.__oneOff__ }
    return this
  }

  no (day) {
    this.__oneOff__ = { day, ...this.__oneOff__ }
    return this
  }

  as (hour) {
    this.__oneOff__ = { hour, ...this.__oneOff__ }
    return this
  }

  toComponent () {
    return {
      hora: this.hora.toString(),
      servico: this.servico,
      profissional: this.profissional,
      cliente: this.cliente
    }
  }
}

export default Agenda
