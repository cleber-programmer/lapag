import { returnProfessionals } from '../mocks/apiMocks'
import io from './IO'

class Profissional {
  static async do_id (id) {
    var { _id, name } = (await returnProfessionals()).filter(p => p._id == id).shift()
    return new Profissional(_id, name)
  }

  get id () {
    return this.__oneOff__._id
  }

  get nome () {
    return this.__oneOff__.name
  }

  get agendamentos () {
    return io.filter(a => a.profissional.id == this.id)
  }

  constructor (_id, name) {
    this.__oneOff__ = { _id, name }
    return this
  }
}

export default Profissional
