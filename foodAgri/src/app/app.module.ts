import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentComponent } from './authent/authent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { AlertsComponent } from './alerts/alerts.component';
import { RationComponent } from './ration/ration.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {FormsModule} from '@angular/forms';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { DashboardComponent } from './dashboard/dashboard.component';
import { jqxMaskedInputModule } from 'jqwidgets-ng/jqxmaskedinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ApiService } from './api.service';
import { VacheComponent } from './vache/vache.component';
import { InfoComponent } from './info/info.component';
library.add(faExternalLinkAlt);
library.add(faUserCircle);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthentComponent,
    AlertsComponent,
    RationComponent,
    HttpComponent,
    AcceuilComponent,
    CalculatriceComponent,
    DashboardComponent,
    SideBarComponent,
    VacheComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    jqxBarGaugeModule,
    jqxChartModule,
    jqxMaskedInputModule,
    jqxButtonModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
