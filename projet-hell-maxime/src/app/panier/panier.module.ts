import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './panier.state';


@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([CartState])
  ]
})
export class PanierModule { }
