import { Product } from "../models/product.model";

export class AddProduct {
  static readonly type = '[Produit] Add';

  constructor(public product: Product) {}
}

export class DelProduct {
  static readonly type = '[Produit] Del';

  constructor(public product: Product) {}
}
