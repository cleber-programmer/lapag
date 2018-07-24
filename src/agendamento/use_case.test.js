import Cliente from './Cliente'
import Servico from './Servico'
import Profissional from './Profissional'
import Dia from './Dia'
import Hora from './Hora'
import io from './IO'

var leticia
var tintura
var ana
var sabado
var dozeHoras
var agendamento

beforeEach(async function () {
  leticia = await Cliente.do_nome('leticia maciel dos santos')
  tintura = await Servico.do_id('vEsRR5f4zaMmMW7CH')
  ana = await Profissional.do_id('4b6BEEvCCH8zAGSyY')
  sabado = new Dia(new Date())
  dozeHoras = new Hora(new Date())
})

it('Leticia agendou uma tintura com a Ana no sabado as 12h', function () {
  var quantidade_de_agendamentos = io.length
  agendamento = leticia.agendou_um(tintura).com_a(ana).no(sabado).as(dozeHoras)
  expect(io.length).toBeGreaterThan(quantidade_de_agendamentos)
})

it('Leticia desmarcou seu agendamento', function () {
  var quantidade_de_agendamentos = io.length
  Cliente.cancelou_seu(agendamento)
  expect(io.length).toBeLessThan(quantidade_de_agendamentos)
})
