import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlaneComponent } from './components/add-plane/add-plane.component';
import { PlaneDatailComponent } from './components/plane-datail/plane-datail.component';
import { PlaneListComponent } from './components/plane-list/plane-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlaneComponent,
    PlaneDatailComponent,
    PlaneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
