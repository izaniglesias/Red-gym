
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import AICoach from './components/AICoach';

function App() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features / Benefits */}
        <section className="py-20 border-y border-zinc-900 bg-zinc-950 reveal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="text-red-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-xl font-black mb-2 uppercase italic">Luz Roja</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Regeneración celular extrema.</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="text-red-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
                </div>
                <h3 className="text-xl font-black mb-2 uppercase italic">Staff Pro</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Entrenadores de competición.</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="text-red-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-xl font-black mb-2 uppercase italic">Acceso Total</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Abierto 24 horas, 7 días.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="classes-section" className="reveal"><Classes /></div>
        <div id="schedule-section" className="reveal"><Schedule /></div>
        <div id="trainers-section" className="reveal"><Trainers /></div>

        {/* Improved Contact Section */}
        <section id="contact-section" className="py-32 bg-zinc-950 relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
                  FORJA TU <br /> <span className="text-red-600">LEYENDA</span>
                </h2>
                <p className="text-zinc-400 text-xl mb-12 uppercase font-bold tracking-widest">
                  Déjanos tus datos y recibe una sesión de entrenamiento personal gratuita.
                </p>
                
                <div className="space-y-6">
                  <a href="tel:+34900123456" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-red-600 transition-all">
                      <svg className="text-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest">Llámanos</span>
                      <span className="text-xl font-black text-white group-hover:text-red-500 transition-colors">+34 900 123 456</span>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/34900123456" target="_blank" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-green-500 transition-all">
                      <svg className="text-green-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.5 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
                    </div>
                    <div>
                      <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
                      <span className="text-xl font-black text-white group-hover:text-green-500 transition-colors">Chat Directo</span>
                    </div>
                  </a>

                  <a href="https://maps.google.com" target="_blank" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-red-600 transition-all">
                      <svg className="text-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest">Ubicación</span>
                      <span className="text-xl font-black text-white group-hover:text-red-500 transition-colors">Calle de la Fuerza 42, Madrid</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 bg-red-600 text-white px-6 py-2 rounded-lg font-black text-xs uppercase tracking-widest italic">Inscríbete Hoy</div>
                <form id="contact-form" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-6 text-white focus:border-red-600 outline-none transition-all" placeholder="Tu nombre..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Correo Electrónico</label>
                    <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-6 text-white focus:border-red-600 outline-none transition-all" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Interés Principal</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-6 text-white focus:border-red-600 outline-none transition-all appearance-none">
                      <option>Musculación / Fuerza</option>
                      <option>HIIT / Cardio</option>
                      <option>Boxeo / MMA</option>
                      <option>Yoga / Recuperación</option>
                    </select>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-black text-lg uppercase tracking-widest transition-all red-glow transform hover:-translate-y-1">
                    SOLICITAR PASE GRATIS
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-sm transform rotate-45 flex items-center justify-center">
                  <span className="text-white font-black -rotate-45">R</span>
                </div>
                <span className="text-3xl font-black tracking-tighter text-white uppercase italic">RED <span className="text-red-600">GYM</span></span>
              </div>
              <p className="text-zinc-500 max-w-sm font-medium leading-relaxed mb-8">
                El único gimnasio diseñado para optimizar tu fisiología a través de la luz roja y el entrenamiento de alta intensidad.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <a key={i} href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-red-600 transition-all text-zinc-400 hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8 italic">Explorar</h4>
              <ul className="space-y-4 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                <li><a href="#classes" className="hover:text-red-500 transition-colors">Todas las Clases</a></li>
                <li><a href="#schedule" className="hover:text-red-500 transition-colors">Horarios Semanales</a></li>
                <li><a href="#trainers" className="hover:text-red-500 transition-colors">Nuestros Coaches</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Suscripciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8 italic">Legal</h4>
              <ul className="space-y-4 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Términos de Uso</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2024 RED GYM - DOMINA TU PODER
            </div>
            <div className="flex gap-10">
               <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" alt="Visa" />
               <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" alt="Mastercard" />
               <img src="https://img.icons8.com/color/48/000000/apple-pay.png" className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </footer>

      <AICoach />
    </div>
  );
}

export default App;
