import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './components/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNgModule,
  ],
})
export class ReactiveFormModule {}
