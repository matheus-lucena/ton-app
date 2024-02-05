import Product from '../product';

export interface ProductsResponse {
  [x: string]: any;
  data: Product[];
}
