import Cliente from './Cliente'
import Agenda from './Agenda'
import Servico from './Servico'
import Profissional from './Profissional'
import Dia from './Dia'
import Hora from './Hora'

var leticia
var tintura
var agenda
var ana
var sabado
var doze_horas
var agendamento

beforeEach(async function () {
  leticia = await Cliente.do_nome('leticia maciel dos santos')
  tintura = await Servico.do_id('vEsRR5f4zaMmMW7CH')
  agenda = new Agenda(leticia, tintura)
  ana = await Profissional.do_id('4b6BEEvCCH8zAGSyY')
  sabado = new Dia(new Date())
  doze_horas = new Hora(new Date())
  agendamento = agenda.com_a(ana).no(sabado).as(doze_horas)
})

it('Deve retornar uma cliente quando acessar a propriedade cliente', function () {
  expect(agendamento.cliente).toEqual(leticia)
})

it('Deve retornar um servico quando acessar a propriedade servico', function () {
  expect(agendamento.servico).toEqual(tintura)
})

it('Deve retornar um profissional quando acessar a propriedade profissional', function () {
  expect(agendamento.profissional).toEqual(ana)
})

it('Deve retornar uma data quando acessar a propriedade dia', function () {
  expect(agendamento.dia).toEqual(sabado)
})

it('Deve retornar uma hora quando acessar a propriedade hora', function () {
  expect(agendamento.hora).toEqual(doze_horas)
})