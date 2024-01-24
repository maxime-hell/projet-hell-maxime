import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProductToCart } from '../panier/panier.state';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  products: Product[] = [
    { id: 1, name: 'Dofus Emeraude', price: 15 },
    { id: 2, name: 'Dofus Ocre', price: 100 },
    { id: 3, name: 'Dofus Ebene', price: 150 },
    { id: 4, name: 'Dofus Ivoire', price: 160 },
    { id: 5, name: 'Dofus Turquoise', price: 10 },
    { id: 6, name: 'Dofus Pourpre', price: 16 }
  ];

  constructor(private store: Store) {}

  addToCart(product: Product) {
    this.store.dispatch(new AddProductToCart(product));
  }
}

