export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
import { Category } from "../categories/category.model";
import { Base } from "../base.model";

export interface Product extends Base {
  title: string,
  image: string,
  description: string,
  stock: number,
  size?: Sizes,
  color: string,
  price: number,
  category: Category,
  isNew: boolean,
  tags: string[]
}
