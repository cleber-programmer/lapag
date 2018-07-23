import Cliente from './Cliente'
import Servico from './Servico'
import Agenda from './Agenda'

it('Deve retornar um Cliente quando executar o metodo estatico do_nome', async function () {
  var marcelito = await Cliente.do_nome('Marcelito')
  expect(marcelito.id).toBe('mt5mSb5oukK6Bu3Yh')
  expect(marcelito.nome).toBe('Marcelito')
})

it('Deve retornar uma Agenda quando executar o metodo agendou_um', async function () {
  var leticia = await Cliente.do_nome('leticia maciel dos santos')
  var corte_feminino = await Servico.do_id('qCrXrzCAqk33N8sLD')
  var agenda = leticia.agendou_um(corte_feminino)
  expect(agenda).toBeInstanceOf(Agenda)
})
