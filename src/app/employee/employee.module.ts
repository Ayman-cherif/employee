import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherComponent } from './afficher/afficher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AfficherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class EmployeeModule { }
