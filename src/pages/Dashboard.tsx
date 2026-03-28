import React, { useState } from 'react';
import { Zap, Bot, MoreHorizontal, Send, Users, BarChart2, ShoppingBasket } from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export default function Dashboard({ setActiveTab }: DashboardProps) {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Found a new event via Luma API. I've predicted a 15% no-show rate and identified 4 vegetarian, 2 gluten-free requirements. Should I generate the S-kauppa cart?",
      time: "10:24 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setChatInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: "I'm processing your request. I'll update the cart shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Proactive Alert Bar */}
      <section className="bg-secondary/20 text-primary px-6 py-3.5 flex items-center justify-between border-b border-secondary/30 shrink-0">
        <div className="flex items-center gap-3">
          <Zap size={18} className="text-primary fill-current" />
          <p className="text-sm font-medium tracking-tight">
            New Event: <span className="font-bold">Aaltoes Workshop</span> on Friday, Oct 24 - 40 RSVPs. Would you like to plan the food order?
          </p>
        </div>
        <button 
          onClick={() => setActiveTab('planning')}
          className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-primary/90 shadow-md transition-all active:scale-95"
        >
          Start Planning
        </button>
      </section>

      {/* Dashboard Content Grid */}
      <div className="flex-1 overflow-hidden flex gap-8 p-8 max-w-[1600px] mx-auto w-full">
        
        {/* Left Column: FoodOps AI Chat */}
        <section className="w-[45%] flex flex-col bg-surface-container-lowest rounded-3xl shadow-sm border border-stone-200/50 overflow-hidden">
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Bot size={20} className="text-primary fill-current" />
              </div>
              <div>
                <h2 className="font-bold text-sm text-primary">FoodOps AI</h2>
                <p className="text-[10px] text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Online
                </p>
              </div>
            </div>
            <button className="text-stone-400 hover:text-primary transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary/10 text-primary'}`}>
                  {msg.sender === 'user' ? <span className="text-xs font-bold">U</span> : <Bot size={16} />}
                </div>
                <div className={`space-y-2 ${msg.sender === 'user' ? 'items-end flex flex-col' : ''}`}>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-surface-container-low text-primary rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                  <div className="text-[10px] text-stone-400 px-1">{msg.time}</div>
                </div>
              </div>
            ))}
            
            {/* User Suggestions */}
            <div className="flex flex-wrap gap-2 justify-end pt-4">
              <button 
                onClick={() => setChatInput('Yes, generate cart')}
                className="text-xs font-bold py-2 px-4 rounded-full border border-secondary text-primary hover:bg-secondary/10 transition-colors"
              >
                Yes, generate cart
              </button>
              <button 
                onClick={() => setChatInput('Show more details')}
                className="text-xs font-bold py-2 px-4 rounded-full border border-secondary text-primary hover:bg-secondary/10 transition-colors"
              >
                Show more details
              </button>
              <button 
                onClick={() => setChatInput('Wait for more RSVPs')}
                className="text-xs font-bold py-2 px-4 rounded-full border border-secondary text-primary hover:bg-secondary/10 transition-colors"
              >
                Wait for more RSVPs
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-4 pr-12 text-sm focus:ring-2 focus:ring-secondary/50 transition-all outline-none" 
                placeholder="Type a message..." 
                type="text"
              />
              <button 
                onClick={handleSendMessage}
                className="absolute right-3 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* Right Column: Event Profile & Stats */}
        <section className="flex-1 space-y-8 overflow-y-auto no-scrollbar pr-2 pb-8">
          {/* Event Header Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-stone-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-0.5 bg-secondary/30 rounded">Active Plan</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Oct 24, 2024</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">Aaltoes Workshop</h1>
              <p className="text-stone-500 text-sm max-w-md leading-relaxed">Internal strategy session and networking event hosted at the Aalto Startup Center.</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* RSVP Card */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-stone-200/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">RSVP Analysis</h3>
                <Users size={20} className="text-secondary" />
              </div>
              <div className="flex items-end gap-4 mb-4">
                <span className="text-5xl font-bold tracking-tighter text-primary">40</span>
                <span className="text-sm font-medium text-stone-400 pb-1">Confirmed</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Predicted Show-up (85%)</span>
                  <span className="font-bold text-primary">34 souls</span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Dietary Card */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-stone-200/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">Dietary Profile</h3>
                <BarChart2 size={20} className="text-secondary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-xs font-medium">Standard</span>
                  </div>
                  <span className="text-xs font-bold">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs font-medium">Vegetarian</span>
                  </div>
                  <span className="text-xs font-bold">10%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                    <span className="text-xs font-medium">Gluten-Free</span>
                  </div>
                  <span className="text-xs font-bold">5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* S-kauppa Cart Preview */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-sm border border-stone-200/50 overflow-hidden">
            <div className="p-6 bg-surface-container-low border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <ShoppingBasket size={16} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold tracking-tight text-primary">S-kauppa Cart Preview</h3>
              </div>
              <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline decoration-secondary decoration-2 underline-offset-4">Edit Items</button>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low overflow-hidden ring-1 ring-stone-100">
                      <img 
                        className="w-full h-full object-cover" 
                        alt="close-up of artisan stone-baked pizza with melted mozzarella and fresh basil leaves on wooden board" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRcpSxYRXNJ3uUCPFRaZJ9kDpAapJ38xih8_PIMMvjeZEXO-MyM1WUemc2ZPpxO9oEEus6GnT-5_gb-cybmMgfDx2X3oHt1c0CHTzXxZeoHdT4gJYJs608TblHtepivvZNYAHW2xCy0OTGCUDTDuaFUmhqkQlVvoKutjRhTktC7bVw6X2wf0bKvss4LFlgZd1Y231LXLL066j3e9JAkwJiatkRS2X8GGR80wfsiCsPSenCwoliDwqO1dsuK9ZaeL7tW7NYCTNa3VM"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Artisan Sourdough Pizza</p>
                      <p className="text-[10px] text-stone-500">12x Margherita, 3x Veggie, 2x GF</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">€184.50</p>
                    <p className="text-[10px] text-stone-400">17 units</p>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low overflow-hidden ring-1 ring-stone-100">
                      <img 
                        className="w-full h-full object-cover" 
                        alt="various cold refreshing soft drink cans and glass bottles in a rustic wooden crate with condensation" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCawJ6O7y4Dk4JiPZUBAD8_V-aKNxMdj6U8sSq9xJixGYMhxMWyAfZ9qdPshIa_IFiXW3IddhGTSKgFTlr6sqo5BTAbAZn99U_SpwWAu27rFNYWZbKIuCzcEn_2Hr9nHE0A0sWOhHzhFtrqri1S7Rf_yozo1kSJF0GKxanRi_VkY9OOgObFNrK7nJXSGPXEOIKlgstFqD-3R1WVKEx2HPNqBYgmF7WfT7M5v7WpcpTb0TJ9gRbENbhcHAEclNHZiPHj1MpGNBxASQQ"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Premium Soft Drinks</p>
                      <p className="text-[10px] text-stone-500">Assorted 0.5L bottles</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">€42.00</p>
                    <p className="text-[10px] text-stone-400">24 units</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest">Estimated Total</p>
                  <p className="text-3xl font-bold tracking-tighter text-primary">€261.50</p>
                </div>
                <button className="bg-primary text-white font-bold px-8 py-3 rounded-2xl shadow-md hover:shadow-xl hover:bg-primary/95 transition-all hover:-translate-y-1">
                  Checkout to S-kauppa
                </button>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}
