export interface CartItem {
  id: number;
  productId: number;
  name: string;
  style: string;
  volume: string;
  price: string;
  packaging?: string[];
  quantity: number;
  imageUrl?: string;
  category: string;
  maxQuantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}