import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./pages/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
