import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentComponent } from './authent/authent.component';
import { RationComponent } from './ration/ration.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'ration', component: RationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
