import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const configTasasInicial: any = {
  id: 1,
  fechaInicio: new Date(),
  // fechaFin: new Date('06-30-2024'),
  fechaFin: null || new Date('06-30-2024'),
};

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  private fb: FormBuilder = inject(FormBuilder);

  public configTasasFormGroups: FormGroup[] = [];

  ngOnInit() {
    // this.configTasasFormGroups.push(
    //   this.fb.group({
    //     id: configTasasInicial.id,
    //     fechaInicio: [configTasasInicial.fechaInicio],
    //     fechaFin: [configTasasInicial.fechaFin],
    //   })
    // );

    this.addNewFormGroup(configTasasInicial, 0);
  }

  public addNewFormGroup(data: any, index: number): void {
    if (this.configTasasFormGroups.length > index + 1) {
      return;
    }

    let newFechaInicio = data.fechaInicio;

    if (index > 0) {
      newFechaInicio = this.removeDaysFromDate(newFechaInicio, 1);
    }

    let newFormGroup = this.fb.group({
      id: [index],
      fechaInicio: [new Date(newFechaInicio)],
      fechaFin: [],
    });

    this.configTasasFormGroups.push(newFormGroup);
  }

  public removeFormGroup(index: number): void {
    this.configTasasFormGroups.splice(index, 1);
  }

  private removeDaysFromDate(date: Date, days: number): Date {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
  }
}
