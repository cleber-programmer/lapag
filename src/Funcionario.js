import React, { Component } from 'react'
import Escala from './Escala'
import { ABRE_AS, FECHA_AS } from './agendamento/IO'
import Agendamento from './Agendamento'
import Profissional from './agendamento/Profissional'
import Cliente from './agendamento/Cliente'
import './Funcionario.css'

function escalaDeHoras () {
  return Array(FECHA_AS - ABRE_AS).toString().split(',').map(() => <Escala />)
}

class Funcionario extends Component {
  constructor (props) {
    super(props)
    this.state = { agendamentos: [] }
    return this
  }

  async componentDidMount () {
    var agendamentos = (await Profissional.do_id(this.props._id)).agendamentos
    Cliente.fez_um_agendamento(this.novo_agendamento.bind(this))
    this.setState({ agendamentos })
    return this
  }

  novo_agendamento (agendamento) {
    if (agendamento.profissional.id === this.props._id) {
      this.setState({ agendamentos: [agendamento, ...(this.state.agendamentos || [])] })
    }
    return this
  }

  render () {
    return (
      <div className='funcionario'>
        <h6 className='funcionario_nome'>{this.props.nickname}</h6>
        <div className='funcionario_escala-de-horas'>
          {escalaDeHoras()}
          {this.state.agendamentos.map(props => <Agendamento {...props} />)}
        </div>
      </div>
    )
  }
}

export default Funcionario
