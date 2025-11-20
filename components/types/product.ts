export interface Product {
  id: string;
  name: string;
  description: string;
  image: { img: string }[];
  price: number;
  removedprice: number;
  rate: number;
  stock: boolean;
  reviews: number;
  category:
    | "gaming"
    | "smartwatch"
    | "camera"
    | "headphones"
    | "phones"
    | "computers";
}
