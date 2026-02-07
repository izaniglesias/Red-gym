
import React, { useState, useEffect } from 'react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null);

  useEffect(() => {
    const handleSelectTrainer = (e: any) => {
      if (e.detail) setSelectedTrainer(e.detail);
    };
    window.addEventListener('selectTrainer', handleSelectTrainer);
    return () => window.removeEventListener('selectTrainer', handleSelectTrainer);
  }, []);

  return (
    <section id="trainers" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">Nuestro <span className="text-red-600">Staff</span></h2>
        <p className="text-zinc-500 mb-20 uppercase tracking-[0.3em] text-xs font-bold">Liderando tu transformación con fuego</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TRAINERS.map((trainer) => (
            <div 
              key={trainer.id} 
              onClick={() => setSelectedTrainer(selectedTrainer === trainer.id ? null : trainer.id)}
              className={`group flex flex-col items-center cursor-pointer transition-all duration-500 ${selectedTrainer && selectedTrainer !== trainer.id ? 'opacity-30 blur-sm scale-90' : 'opacity-100 scale-100'}`}
            >
              <div className="relative w-72 h-72 mb-8">
                <div className={`absolute inset-0 bg-red-600 rounded-full transform transition-all duration-700 ${selectedTrainer === trainer.id ? 'scale-110 opacity-40 rotate-180' : 'rotate-12 scale-105 opacity-20 group-hover:rotate-45'}`}></div>
                <div className={`relative w-full h-full rounded-full overflow-hidden border-8 transition-all duration-500 ${selectedTrainer === trainer.id ? 'border-red-600' : 'border-zinc-900 group-hover:border-red-600/50'}`}>
                  <img src={trainer.image} alt={trainer.name} className={`w-full h-full object-cover transition-all duration-700 ${selectedTrainer === trainer.id ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'}`} />
                </div>
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter">{trainer.name}</h3>
                <p className="text-red-500 font-black text-xs mb-6 tracking-[0.2em] uppercase">{trainer.specialty}</p>
                
                <div className={`overflow-hidden transition-all duration-500 ${selectedTrainer === trainer.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                    "{trainer.bio}"
                  </p>
                  <div className="flex justify-center gap-6">
                    <a href="#" className="text-white hover:text-red-500 transition-colors uppercase font-black text-[10px] tracking-widest">Instagram</a>
                    <a href="#" className="text-white hover:text-red-500 transition-colors uppercase font-black text-[10px] tracking-widest">Bio Completa</a>
                  </div>
                </div>

                {!selectedTrainer && (
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest animate-pulse group-hover:text-red-500">Ver Bio</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
