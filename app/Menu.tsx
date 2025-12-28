
import React, { useState, useEffect } from 'react';
import { db } from '../services/supabase';
import { Product, Category } from '../types';

const Menu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{product: Product, qty: number}[]>([]);
  const [activeCat, setActiveCat] = useState<string>('all');

  useEffect(() => {
    db.getCategories().then(setCategories);
    db.getProducts().then(setProducts);
  }, []);

  const total = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        return prev.map(item => item.product.id === product.id ? {...item, qty: item.qty + 1} : item);
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const exists = prev.find(item => item.product.id === productId);
      if (exists && exists.qty > 1) {
        return prev.map(item => item.product.id === productId ? {...item, qty: item.qty - 1} : item);
      }
      return prev.filter(item => item.product.id !== productId);
    });
  };

  const filteredProducts = activeCat === 'all' 
    ? products 
    : products.filter(p => p.category_id === activeCat);

  return (
    <div className="min-h-screen bg-slate-50 pb-32 max-w-lg mx-auto shadow-xl relative overflow-hidden flex flex-col">
      {/* Header Image */}
      <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
        <img src="https://picsum.photos/800/600?burger" className="w-full h-full object-cover opacity-60" alt="Cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-white text-3xl font-bold">Apptito Burger & Co</h1>
          <p className="text-slate-300 text-sm">Aberto hoje até as 23:00</p>
        </div>
      </div>

      {/* Categories Scroller */}
      <div className="sticky top-0 bg-white shadow-sm z-20 overflow-x-auto whitespace-nowrap p-4 space-x-2 border-b border-slate-100 no-scrollbar">
        <button 
          onClick={() => setActiveCat('all')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCat === 'all' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
        >
          Tudo
        </button>
        {categories.map(c => (
          <button 
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCat === c.id ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="p-4 space-y-6 flex-1">
        {filteredProducts.map(product => {
          const cartItem = cart.find(item => item.product.id === product.id);
          return (
            <div key={product.id} className="flex space-x-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800">{product.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-orange-600">R$ {product.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-3">
                    {cartItem && (
                      <>
                        <button onClick={() => removeFromCart(product.id)} className="w-8 h-8 rounded-full border border-orange-200 text-orange-600 flex items-center justify-center font-bold">-</button>
                        <span className="font-bold text-sm">{cartItem.qty}</span>
                      </>
                    )}
                    <button onClick={() => addToCart(product)} className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Persistent Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 inset-x-0 px-6 max-w-lg mx-auto z-30">
          <button className="w-full bg-orange-600 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between hover:scale-[1.02] transition-transform">
            <div className="flex items-center space-x-3">
              <span className="bg-orange-700 px-2 py-1 rounded-lg text-xs font-bold">{cart.reduce((a, b) => a + b.qty, 0)}</span>
              <span className="font-bold">Ver Carrinho</span>
            </div>
            <span className="font-bold text-lg">R$ {total.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
