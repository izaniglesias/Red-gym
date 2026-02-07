
import React, { useState, useEffect } from 'react';
import { CLASSES } from '../constants';

const categories = [
  { id: 'all', label: 'TODAS' },
  { id: 'Strength', label: 'FUERZA' },
  { id: 'Cardio', label: 'CARDIO' },
  { id: 'Relax', label: 'RELAX' }
];

const Classes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleChangeCategory = (e: any) => {
      if (e.detail) {
        setActiveTab(e.detail);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    };
    window.addEventListener('changeCategory', handleChangeCategory);
    return () => window.removeEventListener('changeCategory', handleChangeCategory);
  }, []);

  const filteredClasses = activeTab === 'all' 
    ? CLASSES 
    : CLASSES.filter(c => c.category === activeTab);

  const handleReserve = (className: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.querySelector('input[placeholder="Tu nombre..."]') as HTMLInputElement;
      if (nameInput) nameInput.focus();
    }
  };

  return (
    <section id="classes" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className={`mb-20 text-center transition-all duration-500 ${isAnimating ? 'scale-105 opacity-50' : 'scale-100 opacity-100'}`}>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter">
            Nuestras <span className="text-red-600">Actividades</span>
          </h2>
          <div className="w-32 h-1.5 bg-red-600 mx-auto mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 p-2 bg-zinc-900/50 rounded-full w-fit mx-auto border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-[10px] font-black tracking-widest transition-all px-8 py-4 rounded-full uppercase italic ${
                  activeTab === cat.id 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 scale-105' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {filteredClasses.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-red-600 transition-all duration-500 shadow-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                   <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-red-600 text-white shadow-lg italic">
                    {item.intensity} Intensity
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{item.name}</h3>
                <p className="text-zinc-300 text-sm mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{item.duration}</span>
                  <button 
                    onClick={() => handleReserve(item.name)}
                    className="text-red-500 font-black text-xs hover:text-red-400 uppercase tracking-widest flex items-center gap-2 transition-all group-hover:gap-4 italic"
                  >
                    Reservar <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
