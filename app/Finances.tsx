
import React from 'react';

const Finances: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Cash Flow Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm mb-1">Entradas (Mês)</p>
          <h3 className="text-2xl font-bold text-emerald-600">R$ 42.500,00</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm mb-1">Saídas (Mês)</p>
          <h3 className="text-2xl font-bold text-red-600">R$ 15.200,00</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-orange-200 bg-orange-50 shadow-sm">
          <p className="text-orange-700 text-sm mb-1 font-medium">Saldo Líquido</p>
          <h3 className="text-2xl font-bold text-orange-600">R$ 27.300,00</h3>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h4 className="font-bold">Fluxo de Caixa</h4>
          <div className="flex space-x-2">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm hover:bg-slate-50">Filtrar Data</button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">Nova Entrada/Saída</button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Data</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Descrição</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase">Categoria</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map(i => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm text-slate-600">25/10/2023</td>
                <td className="p-4 text-sm font-medium text-slate-800">Fornecedor de Bebidas AMBEV</td>
                <td className="p-4 text-sm"><span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase">Custos CMV</span></td>
                <td className="p-4 text-sm font-bold text-red-600 text-right">- R$ 450,00</td>
              </tr>
            ))}
             <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm text-slate-600">25/10/2023</td>
                <td className="p-4 text-sm font-medium text-slate-800">Vendas Diárias PDV</td>
                <td className="p-4 text-sm"><span className="px-2 py-1 rounded bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase">Receitas</span></td>
                <td className="p-4 text-sm font-bold text-emerald-600 text-right">+ R$ 1.250,00</td>
              </tr>
          </tbody>
        </table>
      </div>

      {/* Financial Health Mini Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold mb-4">Divisão de Gastos</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>CMV (Insumos)</span>
                <span>32%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[32%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>Operacional (Contas)</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[15%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center space-y-2">
          <p className="text-slate-500 text-sm">Margem de Lucro Sugerida</p>
          <h3 className="text-4xl font-bold text-orange-600">28%</h3>
          <p className="text-xs text-slate-400">Com base nos últimos 30 dias de operação.</p>
        </div>
      </div>
    </div>
  );
};

export default Finances;
