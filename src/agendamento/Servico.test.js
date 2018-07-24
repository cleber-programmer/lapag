import Servico from './Servico'

it('Deve retornar um Servico quando acessar executar o metodo statico do_id', async function () {
  var servico = await Servico.do_id('qCrXrzCAqk33N8sLD')
  expect(servico).toBeDefined()
})

it('Deve retornar o id do Servico quando acessar a propriedade id', async function () {
  var servico = await Servico.do_id('CrP8u4WQaD7Qf7Nyw')
  expect(servico.id).toBe('CrP8u4WQaD7Qf7Nyw')
})

it('Deve retornar o nome do Servico quando acessar a propriedade nome', async function () {
  var servico = await Servico.do_id('F2ke4teiMDzxKrrKn')
  expect(servico.nome).toBe('Escova')
})

it('Deve retornar a duracao do Servico quando acessar a propriedade duracao', async function () {
  var servico = await Servico.do_id('F2ke4teiMDzxKrrKn')
  expect(servico.duracao).toBe('60')
})