import Dia from './Dia'

var months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

it('Deve retornar um Dia formatado quando executar o metodo toString', function () {
  var date = new Date()
  var dia = new Dia(date)
  expect(dia.toString()).toBe(`${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`)
})
