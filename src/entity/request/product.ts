import Product, {ProductItemState} from '../product';

export interface ProductsResponse {
  [x: string]: any;
  data: Product[];
}

export interface BuyProductsRequest {
  products: ProductItemState[];
}
