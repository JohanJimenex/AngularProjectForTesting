import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [CalendarModule, TableModule, SidebarModule],
  exports: [CalendarModule, TableModule, SidebarModule],
})
export class PrimeNgModule {}
