class Hora {
  constructor (hour) {
    this.__oneOff__ = { hour }
    return this
  }

  toString () {
    return `${this.__oneOff__.hour.getHours()}:${this.__oneOff__.hour.getMinutes()}`
  }
}

export default Hora
