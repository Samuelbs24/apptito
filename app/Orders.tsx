
import React from 'react';
import { OrderStatus } from '../types';

const Orders: React.FC = () => {
  const columns: { id: OrderStatus; label: string; color: string }[] = [
    { id: 'pending', label: 'Pendentes', color: 'bg-slate-200' },
    { id: 'preparing', label: 'Cozinha', color: 'bg-orange-400' },
    { id: 'ready', label: 'Prontos', color: 'bg-emerald-500' },
    { id: 'delivered', label: 'Entregues', color: 'bg-blue-500' },
  ];

  return (
    <div className="flex flex-nowrap space-x-6 overflow-x-auto pb-6 h-full min-h-[600px]">
      {columns.map((col) => (
        <div key={col.id} className="min-w-[300px] flex-1 flex flex-col bg-slate-100/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="font-bold text-slate-700 flex items-center">
              <span className={`w-2 h-2 rounded-full ${col.color} mr-2`}></span>
              {col.label}
            </h3>
            <span className="bg-slate-200 px-2 py-0.5 rounded text-xs font-bold text-slate-500">
              {col.id === 'pending' ? '2' : '0'}
            </span>
          </div>

          <div className="space-y-4 overflow-y-auto flex-1">
            {/* Mock Order Card */}
            {(col.id === 'pending' || col.id === 'preparing') && [1, 2].map(i => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-orange-200 transition-colors cursor-pointer group">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-sm text-slate-800">#124{i}</span>
                   <span className="text-xs text-slate-400">12:10</span>
                </div>
                <div className="mb-3">
                  <p className="font-bold text-sm">João Lucas</p>
                  <p className="text-xs text-slate-500">Mesa 0{i + 3}</p>
                </div>
                <div className="border-t border-slate-50 pt-3 space-y-1">
                  <p className="text-xs">1x Burger Apptito Classic</p>
                  <p className="text-xs">1x Coca Cola Zero</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="p-2 text-xs font-bold text-orange-600 hover:bg-orange-50 rounded-lg">Imprimir</button>
                  <button className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors">Avançar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
