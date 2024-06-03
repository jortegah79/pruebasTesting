import { obtenerRobots } from './arrays'

describe('Pruebas de arrays',()=>{

  it('Debe retornar al menos 3 robots',()=>{
    const res=obtenerRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3)
  })
  it('Debe de existir MegaMan y Ultron',()=>{
    const res=obtenerRobots();
    expect( res ).toContain('MegaMan');
    expect( res ).toContain('Ultron');
  })

})
