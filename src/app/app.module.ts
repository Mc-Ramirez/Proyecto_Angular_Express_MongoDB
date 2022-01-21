import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlaneComponent } from './components/add-plane/add-plane.component';
import { PlaneDatailComponent } from './components/plane-datail/plane-datail.component';
import { PlaneListComponent } from './components/plane-list/plane-list.component';

//Import para formularios y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Conexion
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddPlaneComponent,
    PlaneDatailComponent,
    PlaneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Aqui ponemos los imports que creamos anteriormente
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
