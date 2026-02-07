
import React from 'react';

const Hero: React.FC = () => {
  const scrollToClasses = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('classes-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Asegurar que la sección sea visible si el observador es lento
      target.classList.add('active');
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      target.classList.add('active');
      // Poner el foco en el primer input del formulario
      const firstInput = document.querySelector('#contact-form input') as HTMLInputElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 800);
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with red overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Gym interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-red-600 font-black tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-pulse inline-block border-l-4 border-red-600 pl-4">
            Bienvenido a la Élite
          </h2>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] text-white mb-8 tracking-tighter uppercase italic">
            FORJA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 text-glow">TU ACERO</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed font-medium">
            Entrenamiento de máxima potencia bajo atmósfera de luz roja. 
            No buscamos clientes, buscamos leyendas. ¿Estás listo para el siguiente nivel?
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#classes"
              onClick={scrollToClasses}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-md font-black text-lg transition-all transform hover:scale-105 active:scale-95 red-glow text-center uppercase italic tracking-wider"
            >
              VER ACTIVIDADES
            </a>
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white/20 hover:border-red-600 text-white px-12 py-5 rounded-md font-black text-lg transition-all text-center uppercase italic tracking-wider hover:bg-red-600/10"
            >
              RESERVAR AHORA
            </a>
          </div>
          
          <div className="mt-20 flex gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center">
              <span className="block text-3xl font-black text-white">+500</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Miembros Activos</span>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="text-center">
              <span className="block text-3xl font-black text-white">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Acceso Total</span>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="text-center">
              <span className="block text-3xl font-black text-white">Top</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Equipamiento</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-4">
        <div className="w-1 h-32 bg-zinc-900 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-red-600 animate-scroll-indicator h-1/2"></div>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 vertical-text">SCROLL DOWN</span>
      </div>
    </section>
  );
};

export default Hero;
