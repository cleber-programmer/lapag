import Profissional from './Profissional'

it('Deve retornar um Profissional quando acessar executar o metodo statico do_id', async function () {
  var profissional = await Profissional.do_id('4b6BEEvCCH8zAGSyY')
  expect(profissional).toBeDefined()
})

it('Deve retornar o id do Profissional quando acessar a propriedade id', async function () {
  var profissional = await Profissional.do_id('BzDQS9nob9rjNppf5')
  expect(profissional.id).toBe('BzDQS9nob9rjNppf5')
})

it('Deve retornar o nome do Profissional quando acessar a propriedade nome', async function () {
  var profissional = await Profissional.do_id('CbyCKeE6eJeBKjrq2')
  expect(profissional.nome).toBe('Camila Silva')
})
