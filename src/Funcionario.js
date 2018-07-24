import React, { Component } from 'react'
import Escala from './Escala'
import { ABRE_AS, FECHA_AS } from './agendamento/IO'
import Agendamento from './Agendamento'
import Profissional from './agendamento/Profissional'
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
    this.setState({ agendamentos })
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
