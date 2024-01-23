import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CartState } from '../panier/panier.state';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//export class HeaderComponent implements OnInit{
//  @Select(CartState.getCartSize) cartSize$!: Observable<Product[]>;
//  constructor() { }
//  ngOnInit(): void {}
//}

export class HeaderComponent {
  @Select(CartState.getCartProducts) cartProducts$!: Observable<Product[]>;
}
