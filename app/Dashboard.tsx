
import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Vendas Hoje', value: 'R$ 1.250,00', trend: '+12%', color: 'text-emerald-600' },
    { label: 'Pedidos Ativos', value: '08', trend: 'Em tempo real', color: 'text-orange-600' },
    { label: 'Ticket Médio', value: 'R$ 42,50', trend: '-2%', color: 'text-blue-600' },
    { label: 'Novos Clientes', value: '14', trend: '+5%', color: 'text-purple-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">{s.label}</p>
            <h3 className={`text-2xl font-bold ${s.color}`}>{s.value}</h3>
            <p className="text-xs text-slate-400 mt-2">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h4 className="font-bold">Pedidos Recentes</h4>
            <button className="text-orange-600 text-sm font-medium hover:underline">Ver todos</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                    #{1200 + item}
                  </div>
                  <div>
                    <p className="font-medium">João Pedro</p>
                    <p className="text-xs text-slate-500">Mesa 04 • 12:45</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">R$ 54,90</p>
                  <span className="px-2 py-1 rounded-full text-[10px] uppercase font-bold bg-orange-100 text-orange-600">Preparando</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & Inventory */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h4 className="font-bold">Alertas de Estoque</h4>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm font-bold text-red-700">Pão de Brioche Crítico</p>
              <p className="text-xs text-red-600">Restam apenas 12 unidades. Reposição sugerida: 100un.</p>
            </div>
             <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-sm font-bold text-orange-700">Queijo Cheddar Baixo</p>
              <p className="text-xs text-orange-600">Abaixo da margem de segurança (2kg).</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
             <h4 className="font-bold mb-4">Pratos Mais Vendidos</h4>
             <div className="space-y-3">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-600">Apptito Classic</span>
                 <span className="font-bold">124 vendas</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-600">Bacon Blast</span>
                 <span className="font-bold">98 vendas</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
