import { usuarioIngresado } from "./boleanos"

describe('Pruebas de booleanos',()=>{

it('Debe retornar true',()=>{

  const res=usuarioIngresado();
  expect( res ).toBeTruthy();
})
it('Debe retornar true2',()=>{

  const res=usuarioIngresado();
  expect( res ).not.toBeFalsy();
})

})
