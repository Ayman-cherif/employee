import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherComponent } from './employee/afficher/afficher.component';

const routes: Routes = [
  {
    path :"employees/get", component : AfficherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
