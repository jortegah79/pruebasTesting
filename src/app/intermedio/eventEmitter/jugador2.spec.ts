import { Jugador } from '../../basicas/clase/clase';
import { Jugador2 } from './jugador2';

describe('Jugador2 emit', () => {
  let jugador: Jugador2;
  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe de emitir un evento cuando recibe daño', () => {

    let nuevoHp = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(1000);
    expect(nuevoHp).toBe(0);

  });
  it('Debe de emitir un evento cuando recibe daño Y SOBREVIVIR si es menor a 100', () => {

    let nuevoHp = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(50);
    expect(nuevoHp).toBe(50);

  });
});
