import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [PrimeNgModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
