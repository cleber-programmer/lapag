import { returnServices } from '../mocks/apiMocks'

class Servico {
  static async do_id (id) {
    var { _id, name } = (await returnServices()).filter(s => s._id == id).shift()
    return new Servico(_id, name)
  }

  get id () {
    return this.__oneOff__._id
  }

  get nome () {
    return this.__oneOff__.name
  }

  constructor (_id, name) {
    this.__oneOff__ = { _id, name }
    return this
  }
}

export default Servico
