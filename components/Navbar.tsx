
import React, { useState, useEffect } from 'react';

interface SubLink {
  name: string;
  href: string;
  dataId?: string;
}

interface NavItem {
  name: string;
  href: string;
  id: string;
  subLinks: SubLink[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['classes', 'schedule', 'trainers', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { 
      name: 'Clases', 
      href: '#classes', 
      id: 'classes',
      subLinks: [
        { name: 'Todas las Clases', href: '#classes', dataId: 'all' },
        { name: 'Entrenamiento de Fuerza', href: '#classes', dataId: 'Strength' },
        { name: 'Cardio e Intensidad', href: '#classes', dataId: 'Cardio' },
        { name: 'Yoga y Flexibilidad', href: '#classes', dataId: 'Relax' },
      ]
    },
    { 
      name: 'Horarios', 
      href: '#schedule', 
      id: 'schedule',
      subLinks: [
        { name: 'Lunes', href: '#schedule', dataId: 'monday' },
        { name: 'Martes', href: '#schedule', dataId: 'tuesday' },
        { name: 'Miércoles', href: '#schedule', dataId: 'wednesday' },
        { name: 'Jueves', href: '#schedule', dataId: 'thursday' },
        { name: 'Viernes', href: '#schedule', dataId: 'friday' },
        { name: 'Sábado', href: '#schedule', dataId: 'saturday' },
      ]
    },
    { 
      name: 'Staff', 
      href: '#trainers', 
      id: 'trainers',
      subLinks: [
        { name: 'Alex "The Beast"', href: '#trainers', dataId: '1' },
        { name: 'Sarah Connor', href: '#trainers', dataId: '2' },
        { name: 'Marco Rossi', href: '#trainers', dataId: '3' },
      ]
    },
    { 
      name: 'Contacto', 
      href: '#contact', 
      id: 'contact',
      subLinks: [
        { name: 'Llamar al Gimnasio', href: 'tel:+34900123456' },
        { name: 'Enviar WhatsApp', href: 'https://wa.me/34900123456' },
        { name: 'Cómo llegar', href: 'https://maps.google.com' },
      ]
    },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/');
    setActiveSection('home');
  };

  const handleSubLinkClick = (e: React.MouseEvent, href: string, dataId?: string) => {
    setActiveDropdown(null);
    
    if (dataId) {
      if (href === '#schedule') {
        window.dispatchEvent(new CustomEvent('changeDay', { detail: dataId }));
      } else if (href === '#classes') {
        window.dispatchEvent(new CustomEvent('changeCategory', { detail: dataId }));
      } else if (href === '#trainers') {
        window.dispatchEvent(new CustomEvent('selectTrainer', { detail: dataId }));
      }
    }

    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-red-900/30 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-red-600 rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500 shadow-lg shadow-red-900/20">
            <span className="text-white font-black -rotate-45 group-hover:-rotate-[135deg] transition-transform duration-500">R</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">RED <span className="text-red-600">GYM</span></span>
        </a>
        
        <div className="hidden md:flex gap-4 items-center font-bold uppercase text-[10px] tracking-[0.2em]">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative group/nav"
              onMouseEnter={() => setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href} 
                onClick={(e) => handleSubLinkClick(e, link.href)}
                className={`transition-all relative py-4 px-4 block ${activeSection === link.id ? 'text-red-500' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-red-600"></span>
                )}
              </a>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 transform origin-top ${activeDropdown === link.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-zinc-900/95 backdrop-blur-xl border border-red-900/30 rounded-xl overflow-hidden shadow-2xl shadow-red-900/20">
                  <div className="py-2">
                    {link.subLinks.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        onClick={(e) => handleSubLinkClick(e, sub.href, sub.dataId)}
                        className="block px-6 py-4 text-[10px] text-zinc-400 hover:text-white hover:bg-red-600/10 transition-all border-l-2 border-transparent hover:border-red-600 uppercase tracking-widest font-black"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-800">
            <a href="tel:+34900123456" className="text-white hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleSubLinkClick(e, '#contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95 red-glow font-black text-[10px] tracking-widest uppercase italic"
            >
              ÚNETE YA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
