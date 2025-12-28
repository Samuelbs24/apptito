
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './app/Dashboard';
import Orders from './app/Orders';
import Menu from './app/Menu';
import Finances from './app/Finances';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [viewMode, setViewMode] = useState<'admin' | 'public'>('admin');

  // Toggle for demo purposes
  const toggleView = () => {
    setViewMode(viewMode === 'admin' ? 'public' : 'admin');
  };

  if (viewMode === 'public') {
    return (
      <div className="relative">
        <Menu />
        <button 
          onClick={toggleView}
          className="fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-lg text-xs font-bold opacity-20 hover:opacity-100"
        >
          Voltar Admin
        </button>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'pedidos': return <Orders />;
      case 'financeiro': return <Finances />;
      case 'cardapio': return (
        <div className="flex flex-col items-center justify-center p-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <div className="text-6xl mb-6">📱</div>
          <h3 className="text-2xl font-bold mb-2">Seu Cardápio está Online!</h3>
          <p className="text-slate-500 text-center max-w-md mb-8">
            Os clientes podem acessar seu cardápio pelo link abaixo ou escaneando o QR Code na mesa.
          </p>
          <code className="bg-slate-100 px-4 py-2 rounded-lg text-orange-600 font-bold mb-8">
            apptito.com/apptito-burger
          </code>
          <button 
            onClick={toggleView}
            className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg"
          >
            Visualizar Cardápio Público
          </button>
        </div>
      );
      default: return (
        <div className="flex flex-col items-center justify-center p-20 text-slate-400">
           <div className="text-4xl mb-4">🚧</div>
           <p>Módulo "{activeTab}" em desenvolvimento (Roadmap Mês 2)</p>
        </div>
      );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
