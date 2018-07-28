import React, { Component } from 'react'
import { returnClients, returnProfessionals, returnServices } from './mocks/apiMocks'
import { ABRE_AS, FECHA_AS } from './agendamento/IO'
import Cliente from './agendamento/Cliente'
import Servico from './agendamento/Servico'
import Profissional from './agendamento/Profissional'
import Dia from './agendamento/Dia'
import Hora from './agendamento/Hora'
import './MarcarHora.css'

function clientes (state) {
  return state.clientes.map(c => <option value={c.name}>{c.name}</option>)
}

function servicos (state) {
  return state.servicos.map(s => <option value={s._id}>{s.name}</option>)
}

function funcionarios (state) {
  return state.funcionarios.map(f => <option value={f._id}>{f.nickname}</option>)
}

class MarcarHora extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientes: [],
      clienteSelecionado: '',
      servicos: [],
      servicoSelecionado: '',
      funcionarios: [],
      funcionarioSelecionado: '',
      horaSelecionado: ''
    }
    return this
  }

  componentDidMount () {
    returnClients().then(clientes => this.setState({ clientes }))
    returnProfessionals().then(funcionarios => this.setState({ funcionarios }))
    returnServices().then(servicos => this.setState({ servicos }))
    return this
  }

  selecionarCliente ({ target: { value: clienteSelecionado } }) {
    this.setState({ clienteSelecionado })
    return this
  }

  selecionarSerivco ({ target: { value: servicoSelecionado } }) {
    this.setState({ servicoSelecionado })
    return this
  }

  selecionarFuncionario ({ target:  { value: funcionarioSelecionado } }) {
    this.setState({ funcionarioSelecionado })
    return this
  }

  selecionarHora ({ target: { value: horaSelecionado } }) {
    this.setState({ horaSelecionado })
    return this
  }

  async agendar (event) {
    event.preventDefault()

    var cliente = await Cliente.do_nome(this.state.clienteSelecionado)
    var servico = await Servico.do_id(this.state.servicoSelecionado)
    var profissional = await Profissional.do_id(this.state.funcionarioSelecionado)
    var dia = new Dia(new Date())
    var horas = new Hora(new Date(0, 0, 0, ...this.state.horaSelecionado.split(':')))

    cliente.agendou_um(servico).com_a(profissional).no(dia).as(horas)

    return this
  }

  render () {
    return (
      <div className='marcar-hora'>
        <form>
          <ul>
            <li>
              Cliente
              <select onChange={this.selecionarCliente.bind(this)}>
                { clientes(this.state) }
              </select>
            </li>
            <li>
              Servico
              <select onChange={this.selecionarSerivco.bind(this)}>
                { servicos(this.state) }
              </select>
            </li>
            <li>
              Funcionario
              <select onChange={this.selecionarFuncionario.bind(this)}>
                { funcionarios(this.state) }
              </select>
            </li>
            <li>
              Hora
              <input type='time' min={ABRE_AS} max={FECHA_AS} onChange={this.selecionarHora.bind(this)} />
            </li>
            <li>
              <button onClick={ this.agendar.bind(this) }>Agendar</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default MarcarHora
