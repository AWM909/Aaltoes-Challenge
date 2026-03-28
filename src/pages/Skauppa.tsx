import React from 'react';
import { ShoppingBasket, Search, Plus } from 'lucide-react';

export default function Skauppa() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full space-y-8 overflow-y-auto h-full no-scrollbar">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">S-kauppa Integration</h1>
          <p className="text-stone-500 text-sm">Manage your automated grocery orders and carts.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-bold tracking-tight">API Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-stone-200/50">
            <h2 className="text-lg font-bold text-primary mb-6">Active Carts</h2>
            <div className="space-y-4">
              {/* Cart Item */}
              <div className="p-6 bg-surface-container-low rounded-2xl border border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <ShoppingBasket className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Aaltoes Workshop</h3>
                    <p className="text-xs text-stone-500">Delivery: Oct 24, 14:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-bold text-primary">€261.50</p>
                    <p className="text-[10px] text-stone-400">41 items</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary/90 transition-all">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-stone-200/50">
            <h2 className="text-lg font-bold text-primary mb-6">Quick Order</h2>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-secondary transition-all outline-none" 
                  placeholder="Search products..." 
                  type="text"
                />
              </div>
              {/* Quick items */}
              <div className="space-y-2">
                {['Oatly Barista 1L', 'Juhla Mokka 500g', 'Fazer Blue 200g'].map(item => (
                  <div key={item} className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <span className="text-sm font-medium text-primary">{item}</span>
                    <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm hover:bg-secondary/20 transition-colors text-primary">
                      <Plus size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
