import Hora from './Hora'

it('Deve retornar uma Hora formatado quando executar o metodo toString()', function () {
  var date = new Date()
  var hora = new Hora(date)
  expect(hora.toString()).toBe(`${date.getHours()}:${date.getMinutes()}`)
})
