export interface Product {
  id: string;
  image: { img: string }[];
  name: string;
  price: number;
  removedprice: number;
  rate: number;
  stock: boolean;
  category:
    | "gaming"
    | "smartwatch"
    | "camera"
    | "headphones"
    | "phones"
    | "computers";
}
