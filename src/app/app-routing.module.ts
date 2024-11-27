import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ListComponent } from './components/list-list/game-list.component';
import { listFormComponent } from './components/list-form/game-form.component';
//rutas para la página web
const routes: Routes = [
//ruta default
  {
    path : "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "list/add",
    component: listFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
