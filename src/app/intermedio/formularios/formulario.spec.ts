import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('debe de crear un formulario con 2 campos,email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
  it('EMail debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();
  });
  it('EMail debe ser un mail valido', () => {
    const control = componente.form.get('email');
    control!.setValue('juan@gmail.com');
    expect(control!.valid).toBeTruthy();
  });
});
