import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CoreModule } from './core-module/core.module'
import { AppComponent } from './app.component'
import { CarsRoutingModule, CarsService } from './cars/index'
import { AppRoutingModule } from './app-routing.module'
import { CarsModule } from './cars/cars.module'

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
  ],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
