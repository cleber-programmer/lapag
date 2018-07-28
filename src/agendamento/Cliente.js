import Agenda from './Agenda'
import { returnClients } from '../mocks/apiMocks'
import io from './IO'

var funcionario_recebe_novo = []

class Cliente {
  static cancelou_seu (agendamento) {
    io.splice(io.indexOf(agendamento), 1)
    return Cliente
  }

  static async do_nome (nome) {
    var { _id, name } = (await returnClients(nome)).shift()
    return new Cliente(_id, name)
  }

  static fez_um_agendamento (callback) {
    funcionario_recebe_novo.push(callback)
    return Cliente
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
    setImmediate(() => {
      io.push(agendamento)
      funcionario_recebe_novo.forEach(c => c(agendamento.toComponent()))
    })
    return agendamento
  }
}

export default Cliente
