
import { Company, Product, Order, Category, StockItem, FinancialEntry } from '../types';

// In a real app, this would use @supabase/supabase-js
// For this demo, we simulate the database and API calls.

const MOCK_COMPANY: Company = {
  id: '1',
  name: 'Apptito Burger & Co',
  slug: 'apptito-burger',
  logo_url: 'https://picsum.photos/200/200?random=1',
  whatsapp_number: '5511999999999',
  settings: {}
};

const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Hambúrgueres', order: 1, active: true },
  { id: 'c2', name: 'Bebidas', order: 2, active: true },
  { id: 'c3', name: 'Sobremesas', order: 3, active: true }
];

const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', category_id: 'c1', name: 'Apptito Classic', price: 32.90, description: 'Pão, carne 180g, queijo, alface e tomate.', active: true, stock_controlled: true, image_url: 'https://picsum.photos/400/300?random=10' },
  { id: 'p2', category_id: 'c1', name: 'Bacon Blast', price: 38.50, description: 'Muito bacon crocante, cheddar e barbecue.', active: true, stock_controlled: true, image_url: 'https://picsum.photos/400/300?random=11' },
  { id: 'p3', category_id: 'c2', name: 'Coca-Cola Lata', price: 6.50, description: '350ml bem gelada.', active: true, stock_controlled: false, image_url: 'https://picsum.photos/400/300?random=12' },
  { id: 'p4', category_id: 'c2', name: 'Suco de Laranja', price: 12.00, description: 'Natural da fruta.', active: true, stock_controlled: false, image_url: 'https://picsum.photos/400/300?random=13' }
];

const MOCK_ORDERS: Order[] = [
  { id: 'o1', customer_name: 'João Silva', table_number: '05', total_amount: 45.40, status: 'preparing', created_at: new Date().toISOString() },
  { id: 'o2', customer_name: 'Maria Clara', table_number: '12', total_amount: 32.90, status: 'pending', created_at: new Date().toISOString() },
  { id: 'o3', customer_name: 'Roberto', table_number: '02', total_amount: 70.90, status: 'ready', created_at: new Date().toISOString() }
];

const MOCK_STOCK: StockItem[] = [
  { id: 's1', name: 'Pão de Brioche', unit: 'un', quantity: 150, min_quantity: 50 },
  { id: 's2', name: 'Blend Carne 180g', unit: 'un', quantity: 80, min_quantity: 40 },
  { id: 's3', name: 'Queijo Cheddar', unit: 'kg', quantity: 5.4, min_quantity: 2.0 }
];

const MOCK_FINANCES: FinancialEntry[] = [
  { id: 'f1', type: 'income', category: 'Venda de Pedido', amount: 3500.50, description: 'Faturamento do dia', entry_date: '2023-10-25' },
  { id: 'f2', type: 'expense', category: 'Fornecedor', amount: 1200.00, description: 'Compra de carnes', entry_date: '2023-10-24' }
];

export const db = {
  getCompany: async () => MOCK_COMPANY,
  getCategories: async () => MOCK_CATEGORIES,
  getProducts: async () => MOCK_PRODUCTS,
  getOrders: async () => MOCK_ORDERS,
  getStock: async () => MOCK_STOCK,
  getFinances: async () => MOCK_FINANCES,
  
  createOrder: async (order: Partial<Order>) => {
    console.log('Order created:', order);
    return { ...order, id: Math.random().toString() };
  }
};
