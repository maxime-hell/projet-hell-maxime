import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartState } from './panier/panier.state';
import { PanierModule } from './panier/panier.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanierModule,
    FormsModule,
    NgxsModule.forRoot([], { developmentMode: true }),
    NgxsModule.forFeature([]),
    NgxsModule.forRoot([CartState], { developmentMode: true }),
    NgxsModule.forFeature([CartState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
