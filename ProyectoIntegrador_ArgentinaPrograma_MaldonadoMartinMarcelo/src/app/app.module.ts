import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgProgrComponent } from './components/logo-arg-progr/logo-arg-progr.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgrComponent,
    RedesSocialesComponent,
    BannerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
