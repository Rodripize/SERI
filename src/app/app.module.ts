import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents} from './app-rountingmodule';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AyudandomeComponent } from './ayudandome/ayudandome.component';
import { AyudandoComponent } from './ayudando/ayudando.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { AyudaseriComponent } from './ayudaseri/ayudaseri.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent,
    AyudandomeComponent,
    AyudandoComponent,
    CreateComponent,
    AyudaseriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    NgbModalModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
