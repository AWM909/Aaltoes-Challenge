import React from 'react';
import { Users, MapPin, ChevronRight } from 'lucide-react';

export default function Events() {
  const events = [
    { id: 1, name: 'Aaltoes Workshop', date: 'Oct 24, 2024', rsvp: 40, location: 'Aalto Startup Center', status: 'Action Required' },
    { id: 2, name: 'Founders Meetup', date: 'Nov 02, 2024', rsvp: 120, location: 'Maria 01', status: 'Planned' },
    { id: 3, name: 'Slush Pre-party', date: 'Nov 29, 2024', rsvp: 350, location: 'Dipoli', status: 'Pending' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full space-y-8 overflow-y-auto h-full no-scrollbar">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">Events</h1>
          <p className="text-stone-500 text-sm">Manage your upcoming events and food orders.</p>
        </div>
        <button className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-primary/90 shadow-md transition-all">
          + New Event
        </button>
      </div>
      
      <div className="grid gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-stone-200/50 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex flex-col items-center justify-center text-primary">
                <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                <span className="text-xl font-black leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">{event.name}</h3>
                <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
                  <span className="flex items-center gap-1"><Users size={14} /> {event.rsvp} RSVPs</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                event.status === 'Action Required' 
                  ? 'bg-secondary/30 text-primary' 
                  : 'bg-surface-container-low text-stone-500'
              }`}>
                {event.status}
              </span>
              <ChevronRight className="text-stone-300 group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
