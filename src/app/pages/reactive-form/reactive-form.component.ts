import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const configTasasInicial: any = {
  id: 1,
  fechaInicio: new Date(),
  // fechaFin: new Date('06-30-2024'),
  fechaFin: null,
};

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  private fb: FormBuilder = inject(FormBuilder);

  public configTasasFormGroups: FormGroup[] = [];

  constructor() {}

  ngOnInit() {
    this.configTasasFormGroups.push(
      this.fb.group({
        id: configTasasInicial.id,
        fechaInicio: [configTasasInicial.fechaInicio],
        fechaFin: [configTasasInicial.fechaFin],
      })
    );
  }

  addNewFormGroup(data: any, index: number) {
    const newFechaInicio = new Date(data.fechaFin).setDate(
      data.fechaFin.getDate() + 1
    );

    let newFormGroup = this.fb.group({
      id: [index],
      fechaInicio: [new Date(newFechaInicio)],
      fechaFin: [],
    });

    if (index + 1 === this.configTasasFormGroups.length) {
      this.configTasasFormGroups.splice(index + 1, 0, newFormGroup);
    }

    // if (index === this.configTasasFormGroups.length - 1) {
    //   this.configTasasFormGroups.push(newFormGroup);
    // }

    // this.configTasasFormGroups.push(newFormGroup);
  }

  public removeFormGroup(index: number): void {
    this.configTasasFormGroups.splice(index, 1);
  }
}
