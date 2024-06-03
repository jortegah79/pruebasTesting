import { incrementar } from './numeros';

describe('Pruebas con numeros', () => {
  it('Si el número es mayor a 100, retorna 100', () => {
    const res = incrementar(300);
    expect(res).toBe(100);
  });
  it('Debe de retornar el numero + 1 si no es mayor a 100', () => {
    const res = incrementar(50);
    expect(res).toBe(51);
  });
});
