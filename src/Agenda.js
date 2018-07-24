import React, { Component } from 'react'
import { returnProfessionals } from './mocks/apiMocks'
import Funcionario from './Funcionario'
import './Agenda.css'

class Quadro extends Component {
  constructor (props) {
    super(props)
    this.state = { profissionais: [] }
    return this
  }

  async componentDidMount () {
    var profissionais = await returnProfessionals()
    this.setState({ profissionais })
    return this
  }

  render () {
    return (
      <div className='agenda'>
        {this.state.profissionais.map(props => <Funcionario {...props} />)}
      </div>
    )
  }
}

export default Quadro
