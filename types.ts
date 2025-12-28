
export type UserRole = 'owner' | 'admin' | 'waiter' | 'kitchen';
export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
export type FinancialType = 'income' | 'expense';

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  whatsapp_number?: string;
  settings: any;
}

export interface Category {
  id: string;
  name: string;
  order: number;
  active: boolean;
}

export interface Product {
  id: string;
  category_id?: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  active: boolean;
  stock_controlled: boolean;
}

export interface Order {
  id: string;
  customer_name?: string;
  table_number?: string;
  total_amount: number;
  status: OrderStatus;
  payment_method?: string;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  product?: Product;
}

export interface StockItem {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  min_quantity: number;
}

export interface FinancialEntry {
  id: string;
  type: FinancialType;
  category: string;
  amount: number;
  description: string;
  entry_date: string;
}
