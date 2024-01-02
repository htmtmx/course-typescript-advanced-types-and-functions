import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categodyId: string;
}

export interface PickProductDto extends Pick<Product, 'title' | 'stock'> { }

export interface UpdateProductDto extends Partial<CreateProductDto>{ }

export interface RequiredProductDto extends Required<Product> { }

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  tags: ReadonlyArray<string>;
}

// Omit es una utilidad de TypeScript que permite omitir propiedades de un tipo.
// En este caso, omitimos las propiedades que no queremos que se puedan modificar
// al crear un producto.

// Pick es una utilidad de TypeScript que permite seleccionar propiedades de un tipo.
// En este caso, seleccionamos las propiedades que queremos que se puedan modificar
// al actualizar un producto.