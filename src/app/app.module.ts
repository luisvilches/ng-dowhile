import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from "@angular/router";
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { routerList } from "./app.routing";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadersComponent } from './headers/headers.component';
import { CasosComponent } from './casos/casos.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { BannersComponent } from './banners/banners.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadersComponent,
    CasosComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServiceComponent,
    HomeComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routerList,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
