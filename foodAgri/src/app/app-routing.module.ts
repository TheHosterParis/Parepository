import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentComponent } from './authent/authent.component';
import { RationComponent } from './ration/ration.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { VacheComponent } from './vache/vache.component';
import { HttpComponent } from './http/http.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'ration', component: RationComponent},
  {path: 'authent', component: AuthentComponent},
  {path: 'calculatrice', component: CalculatriceComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'vache', component: VacheComponent},
  {path: 'http', component: HttpComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
