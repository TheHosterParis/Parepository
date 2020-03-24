import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentComponent } from './authent/authent.component';
import { RationComponent } from './ration/ration.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'ration', component: RationComponent},
  {path: 'authent', component: AuthentComponent},
  {path: 'calculatrice', component: CalculatriceComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
