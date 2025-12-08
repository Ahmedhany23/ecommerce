interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  product: {
    id: string;
    name: string;
    image: Array<{ img: string }>;
  };
}

export interface Order {
  id: string;
  total: number;
  status: string;
  address: string;
  city: string;
  country: string;
  createdAt: string;
  items: OrderItem[];
}
