import { mensaje } from "./string";


describe('Pruebas de strings',()=>{


  it('Debe regresar un string',()=>{

    const resp = mensaje('Fernando');

    expect( typeof resp ).toBe('string');

  });
  it('Debe retornar un saludo con el nombre enviado',()=>{

    const nombre='mipersonaje';

    const resp = mensaje(nombre);
console.log(resp)
    expect( resp ).toContain( nombre );

  });



});



