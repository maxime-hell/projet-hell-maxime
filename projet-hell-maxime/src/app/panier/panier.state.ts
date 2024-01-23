import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { AddProduct, DelProduct } from './panier-action';
import { ProductStateModel } from './panier-state-model';

export class AddProductToCart {
  static readonly type = '[Cart] Add Product';
  constructor(public product: Product) {}
}

export interface CartStateModel {
  products: Product[];
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    products: []
  }
})
export class CartState {
  @Selector()
  static getProducts(state: CartStateModel) {
    return state.products;
  }
  static getCartSize(state: CartStateModel): number {
    return state.products.length;
  }
  static getCartProducts(state: CartStateModel): Product[] {
  return state.products;
  }


  @Action(AddProductToCart)
  addProduct({ getState, patchState }: StateContext<CartStateModel>, { product }: AddProductToCart) {
    const state = getState();
    patchState({
      products: [...state.products, product]
    });
  }
}
