import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './pages/public-pages/development/development.component';

const routes: Routes = [
  {path: 'development', component: DevelopmentComponent},
  {path: '', loadChildren: () => import('./pages/public-pages/public-pages.module').then(m => m.PublicPagesModule)},
  {path: 'app', loadChildren: () => import('./pages/application-pages/application-pages.module').then(m => m.ApplicationPagesModule)},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
