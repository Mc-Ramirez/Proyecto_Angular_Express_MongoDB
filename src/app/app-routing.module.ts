import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaneDatailComponent } from './components/plane-datail/plane-datail.component';
import { PlaneListComponent } from './components/plane-list/plane-list.component';
import { AddPlaneComponent } from './components/add-plane/add-plane.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'add-plane' }, 
  { path: 'plane-list', component: PlaneListComponent },
  { path: 'add-plane', component: AddPlaneComponent },
  { path: 'edit-plane/:id', component: PlaneDatailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
