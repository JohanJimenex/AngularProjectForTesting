import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
