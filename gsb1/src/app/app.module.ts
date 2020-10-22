import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { GestCompComponent } from './gest-comp/gest-comp.component';

import { SharedService } from './services/shared.service';
import { LoginService } from './services/login.service';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { CompositionComponent } from './composition/composition.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    GestCompComponent,
    SearchByNameComponent,
    CompositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
