import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProductToCart } from './panier.state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor(private store: Store) { }

  addProductToCart(product : any) {
    this.store.dispatch(new AddProductToCart(product));
  }
}
