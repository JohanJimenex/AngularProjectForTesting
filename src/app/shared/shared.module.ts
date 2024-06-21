import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeNgModule],
  exports: [PrimeNgModule],
})
export class SharedModule {}
