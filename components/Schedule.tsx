
import React, { useState, useEffect } from 'react';
import { SCHEDULE } from '../constants';

const days = [
  { id: 'monday', label: 'LUN' },
  { id: 'tuesday', label: 'MAR' },
  { id: 'wednesday', label: 'MIE' },
  { id: 'thursday', label: 'JUE' },
  { id: 'friday', label: 'VIE' },
  { id: 'saturday', label: 'SAB' }
];

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>('monday');

  useEffect(() => {
    const handleChangeDay = (e: any) => {
      if (e.detail) setActiveDay(e.detail);
    };
    window.addEventListener('changeDay', handleChangeDay);
    return () => window.removeEventListener('changeDay', handleChangeDay);
  }, []);

  const handleQuickBook = (activity: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const select = document.querySelector('select') as HTMLSelectElement;
      if (select) {
        select.classList.add('ring-2', 'ring-red-600');
        setTimeout(() => select.classList.remove('ring-2', 'ring-red-600'), 2000);
      }
    }
  };

  return (
    <section id="schedule" className="py-32 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase italic tracking-tighter">Horarios</h2>
            <p className="text-red-600 font-black uppercase tracking-widest text-sm">Elige tu campo de batalla</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-zinc-950 rounded-xl border border-zinc-800">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id as any)}
                className={`w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center rounded-lg transition-all border ${
                  activeDay === day.id 
                    ? 'bg-red-600 border-red-500 text-white scale-110 shadow-xl shadow-red-900/40' 
                    : 'bg-transparent border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600'
                }`}
              >
                <span className="text-xs font-black">{day.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div key={activeDay} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-500">
          {SCHEDULE.map((row, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 ${
                row[activeDay] !== 'Closed' ? 'bg-zinc-950 border-zinc-800 hover:border-red-600/50' : 'bg-zinc-800/20 border-transparent opacity-50'
              }`}
            >
              <div className="text-red-600 font-black text-2xl mb-4 group-hover:scale-110 transition-transform origin-left">{row.time}</div>
              <div className="text-white text-xl font-black uppercase italic mb-2">{row[activeDay]}</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Pista Principal</div>
              {row[activeDay] !== 'Closed' && row[activeDay] !== 'Free Gym' && (
                <button 
                  onClick={() => handleQuickBook(row[activeDay])}
                  className="mt-6 text-[10px] font-black text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Anotarse ahora
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest">Entrenamiento Dirigido</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-zinc-700 rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest">Acceso Libre</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
