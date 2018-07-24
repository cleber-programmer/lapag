import React from 'react'
import './Agendamento.css'

function obterHora (hora) {
  return hora.split(':').shift()
}

function obterMinuto (hora) {
  return hora.split(':').pop()
}

export default (props) => (
  <div className={'agendamento as_' + obterHora(props.hora) + 'h e_' + obterMinuto(props.hora) + 'm duracao_de_' + props.servico.duracao + 'm'}>
    {props.cliente.nome}
  </div>
)
