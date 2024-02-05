interface Product {
  image_url: string;
  name: string;
  sn: string;
  value: number;
}

export interface ProductState extends Product {
  count?: number;
}

export default Product;
