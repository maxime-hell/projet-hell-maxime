import { Product } from "../models/product.model";
import { State } from "@ngxs/store";

export class ProductStateModel {
  panier!: Product[];
}
