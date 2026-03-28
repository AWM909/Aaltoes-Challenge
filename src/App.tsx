import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Skauppa from './pages/Skauppa';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Planning from './pages/Planning';
import Login from './pages/Login';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="bg-surface text-primary antialiased overflow-hidden flex h-screen w-full">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={() => setIsLoggedIn(false)} />
      <main className="ml-64 flex-1 flex flex-col h-screen overflow-hidden bg-surface">
        <Header />
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'events' && <Events />}
          {activeTab === 'skauppa' && <Skauppa />}
          {activeTab === 'settings' && <Settings />}
          {activeTab === 'help' && <Help />}
          {activeTab === 'planning' && <Planning />}
        </div>
      </main>
    </div>
  );
}
