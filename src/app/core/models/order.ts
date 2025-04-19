export interface Order {
  id: number;
  itemName: string;
  quantity: number;
  date?: string;
  price: number;
  status: 'Delivered' | 'Pending' | 'Cancelled';
}
