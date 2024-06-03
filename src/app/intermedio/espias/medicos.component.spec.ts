import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { mensaje } from '../../basicas/string/string';

describe('Medicos component', () => {

  let componente: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;
  let medicosService: MedicosService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicosService, { provide: HttpClient, useValue: httpSpy }],
    });

    fixture = TestBed.createComponent(MedicosComponent);
    componente = fixture.componentInstance;
    medicosService = TestBed.inject(MedicosService);
    httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  });

  it('comprobar que se crea un componente', () => {
    expect(componente).toBeTruthy();
  });

  it('devuelve al menos un medico', () => {
    const mockMedicosResponse = [{ nombre: 'Juan' }, { nombre: 'Pepe' }];

    spyOn(medicosService, 'getMedicos').and.returnValue(
      of(mockMedicosResponse)
    );
    componente.ngOnInit();
    expect(medicosService.getMedicos).toHaveBeenCalled();
    // Verificamos que los médicos se hayan asignado correctamente en el componente
    console.log(componente.medicos);

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('devuelve el primer medico y se llama JUan', () => {
    const mockMedicosResponse = [{ nombre: 'Juan' }, { nombre: 'Pepe' }];

    spyOn(medicosService, 'getMedicos').and.returnValue(
      of(mockMedicosResponse)
    );
    componente.ngOnInit();
    expect(medicosService.getMedicos).toHaveBeenCalled();
    // Verificamos que los médicos se hayan asignado correctamente en el componente
    console.log(componente.medicos);

    expect(componente.medicos[0].nombre).toBe('Juan');
  });

  it('devuelve el primer medico y se llama Pepe', () => {
    const mockMedicosResponse = [{ nombre: 'Juan' }, { nombre: 'Pepe' }];

    spyOn(medicosService, 'getMedicos').and.returnValue(
      of(mockMedicosResponse)
    );
    componente.ngOnInit();
    expect(medicosService.getMedicos).toHaveBeenCalled();
    // Verificamos que los médicos se hayan asignado correctamente en el componente
    console.log(componente.medicos);

    expect(componente.medicos[1].nombre).toBe('Pepe');
  });

  it('Debe llamar al servidor para agregar medico', () => {
    const espia = spyOn(medicosService, 'agregarMedico').and.callFake(
      (medico) => {
        return of();
      }
    );

    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(medicosService, 'agregarMedico').and.returnValue(of(medico));
    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBe(0)
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {

    const mierror = 'No se pudo agregar el medico';

    spyOn(medicosService, 'agregarMedico').and.returnValue(  throwError(()=>mierror)  );

    componente.agregarMedico();

    expect(componente.medicos.length).toBe(0);
    expect(componente.mensajeError).toBe(mierror)

  });

  it('Debe de llamar al servidor para borrar un medico',()=>{

    spyOn(window,'confirm').and.returnValue(true);
    const espia=spyOn(medicosService,'borrarMedico').and.returnValue(of());
    componente.borrarMedico('1');
    expect( espia ).toHaveBeenCalledWith('1');

  })

  it('No debe de llamar al servidor para borrar un medico ',()=>{
    spyOn(window,'confirm').and.returnValue(false);
    const espia=spyOn(medicosService,'borrarMedico').and.returnValue(of());
    componente.borrarMedico('1');
    expect( espia ).not.toHaveBeenCalledWith('1');

  })

});
