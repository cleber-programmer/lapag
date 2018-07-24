import { returnServices } from '../mocks/apiMocks'

class Servico {
  static async do_id (id) {
    var { _id, name, duration } = (await returnServices()).filter(s => s._id == id).shift()
    return new Servico(_id, name, duration)
  }

  get id () {
    return this.__oneOff__._id
  }

  get nome () {
    return this.__oneOff__.name
  }

  get duracao () {
    return this.__oneOff__.duration
  }

  constructor (_id, name, duration) {
    this.__oneOff__ = { _id, name, duration }
    return this
  }
}

export default Servico
