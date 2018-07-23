import Agenda from './Agenda'
import { returnClients } from '../mocks/apiMocks'

var io = []

class Cliente {
  static get agendamentos () {
    return [...io]
  }

  static cancelou_seu (scheduling) {
    io = io.filter(a => a !== scheduling)
    return this
  }

  static async do_nome (nome) {
    var { _id, name } = (await returnClients(nome)).shift()
    return new Cliente(_id, name)
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

  agendou_um (servico) {
    var agendamento = new Agenda(this, servico)
    io.push(agendamento)
    return agendamento
  }
}

export default Cliente
