export interface Product {
  id: number;
  name: string;
  description: string;
  image: { img: string }[];
  price: number;
  removedprice: number;
  rate: number;
  stock: boolean;
  reviews: number;
  quantity: number;
  category:
    | "gaming"
    | "smartwatch"
    | "camera"
    | "headphones"
    | "phones"
    | "computers";
}
