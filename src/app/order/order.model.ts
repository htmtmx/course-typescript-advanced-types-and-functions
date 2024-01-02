import { Product } from "../products/product.model";
import { User } from "../users/user.model";
import { Base } from "../base.model";

export interface Order extends Base {
  products: Product[];
  user: User
}