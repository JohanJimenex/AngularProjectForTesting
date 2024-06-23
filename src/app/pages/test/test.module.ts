import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TestModule {}
