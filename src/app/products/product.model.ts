export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
import { Category } from "../categories/category.model";

export interface Product {
    id: string | number,
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    category: Category
}
