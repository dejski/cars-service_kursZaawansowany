import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CoreModule } from './core-module/core.module'
import { AppComponent } from './app.component'
import { CarsRoutingModule, CarsService } from './cars/index'
import { AppRoutingModule } from './app-routing.module'
import { CarsModule } from './cars/cars.module'
import { LoginRoutingModule } from './login/login-routing.module'
import { LoginModule } from './login/login.module'
import { AuthService } from './auth/auth.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule,
    LoginRoutingModule,
    LoginModule,
  ],
  providers: [CarsService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
