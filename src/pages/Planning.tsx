import React from 'react';
import { Calendar, Users, Utensils, CheckCircle2 } from 'lucide-react';

export default function Planning() {
  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full space-y-8 overflow-y-auto h-full no-scrollbar">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">Plan Event</h1>
        <p className="text-stone-500 text-sm">Configure food requirements for Aaltoes Workshop.</p>
      </div>
      
      <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-stone-200/50 space-y-8">
        <div className="flex items-center gap-4 border-b border-stone-100 pb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
            <Calendar size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Aaltoes Workshop</h2>
            <p className="text-sm text-stone-500">Friday, Oct 24, 2024 • Aalto Startup Center</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Headcount & Budget</h3>
            <div>
              <label className="block text-xs font-bold text-primary mb-2">Expected Attendees</label>
              <input type="number" defaultValue={40} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm text-primary focus:ring-2 focus:ring-secondary outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-primary mb-2">Budget per person (€)</label>
              <input type="number" defaultValue={15} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm text-primary focus:ring-2 focus:ring-secondary outline-none" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Dietary Needs</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded border-stone-300 focus:ring-primary" />
                <span className="text-sm font-medium text-primary">Vegetarian (4 requested)</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded border-stone-300 focus:ring-primary" />
                <span className="text-sm font-medium text-primary">Gluten-Free (2 requested)</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded border-stone-300 focus:ring-primary" />
                <span className="text-sm font-medium text-primary">Vegan</span>
              </label>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-100 flex justify-end gap-4">
          <button className="px-6 py-3 rounded-xl text-sm font-bold text-stone-500 hover:bg-surface-container-low transition-all">
            Save Draft
          </button>
          <button className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-xl hover:bg-primary/95 transition-all">
            Generate Order
          </button>
        </div>
      </div>
    </div>
  );
}
