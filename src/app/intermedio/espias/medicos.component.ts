import { Component, OnInit, inject } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  standalone:true,
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string="";
  public _medicoService: MedicosService=inject(MedicosService);

  constructor( ) { }

  ngOnInit() {
    this._medicoService.getMedicos()
          .subscribe( (medicos:any) => this.medicos = medicos );
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico)
          .subscribe(
            (medicoDB: any) => this.medicos.push(medicoDB),
            ( err: string) => this.mensajeError = err
          );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
