import { Jugador } from './clase';

describe('Pruebas de clase ', () => {
  let jugador = new Jugador();

  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeeach');
    jugador=new Jugador();
  });
  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  it('Debe de retornar 80 si recibe 20 de daño', () => {
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });
  it('Debe de retornar 50 si recibe 50 de daño', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });
  it('Debe de retornar 0 si recibe 100 o mas de daño', () => {
    const resp = jugador.recibeDanio(150);
    expect(resp).toBe(0);
  });
});
