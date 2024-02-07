import {ProductItemState} from './product';

export interface PurchedItem {
  total: number;
  id: string;
  client_id: string;
  products: ProductItemState[];
}

export interface PurchedResponse {
  [x: string]: any;
  data: PurchedItem[];
}
