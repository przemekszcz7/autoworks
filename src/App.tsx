import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X, 
  Wrench, 
  Search, 
  Settings, 
  ShieldCheck, 
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const FAVICON_URL = "https://i.postimg.cc/rpxnvzCG/645508314-122201084138548519-2465374974539521361-n.jpg";

/* --- Components --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O NAS', href: '#about' },
    { name: 'USŁUGI', href: '#services' },
    { name: 'OPINIE', href: '#reviews' },
    { name: 'KONTAKT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 overflow-hidden rounded-[4px] shadow-lg shadow-red/20 border border-white/10">
            <img src={FAVICON_URL} alt="AutoWorks Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-2xl tracking-tighter text-white">AUTO<span className="text-red">WORKS</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="tel:+48696177041" className="btn-primary py-2 px-6 text-sm">ZADZWOŃ</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-display text-4xl text-white tracking-widest hover:text-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+48696177041" className="btn-primary mt-4" onClick={() => setIsOpen(false)}>ZADZWOŃ</a>
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden carbon-fiber pt-20">
      <div className="grid-overlay absolute inset-0 opacity-20 pointer-events-none"></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border-l-2 border-orange py-1 px-4 mb-6">
            <span className="font-mono text-orange text-xs tracking-tighter uppercase">Professional Auto Service</span>
          </div>
          <h1 className="text-white leading-[1] mb-6 flex flex-col items-start" style={{ fontSize: 'clamp(2rem, 6.5vw, 6rem)' }}>
            <span className="block mb-2">SPECJALIŚCI</span>
            <span className="block bg-linear-to-r from-red to-orange bg-clip-text text-transparent py-1">
              OD AUTOMOTIVE
            </span>
          </h1>
          <p className="text-text-muted text-lg max-w-md mb-10 font-medium">
            Profesjonalna mechanika pojazdowa, diagnostyka komputerowa i serwis Twojego samochodu na najwyższym poziomie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary">NASZE USŁUGI</a>
            <a href="tel:696177041" className="bg-bg-light border border-white/10 text-white font-subheading uppercase text-lg px-8 py-3 rounded-[6px] tracking-wider hover:bg-white/5 transition-all">
              KONTAKT
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-32 pt-12 border-t border-white/5">
            <div>
              <div className="font-mono text-red text-sm mb-1 uppercase">Lokalizacja</div>
              <div className="font-subheading text-white">GNIEWOMIEROWICE</div>
            </div>
            <div>
              <div className="font-mono text-red text-sm mb-1 uppercase">Gwarancja</div>
              <div className="font-subheading text-white">NA KAŻDĄ USŁUGĘ</div>
            </div>
            <div>
              <div className="font-mono text-red text-sm mb-1 uppercase">Pasja</div>
              <div className="font-subheading text-white">DO MOTORYZACJI</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square w-full max-w-lg mx-auto">
             <div className="absolute inset-0 bg-linear-to-tr from-red/20 to-orange/20 rounded-full blur-3xl"></div>
             <div className="relative z-10 w-full h-full border-[10px] border-white/5 rounded-[12px] overflow-hidden group">
               <img 
                src="https://i.postimg.cc/cHVR7Gz1/000H9OY8DXL63WAQ-C124.webp" 
                alt="Engine detail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                 <div className="font-display text-4xl text-white">AUTO<span className="text-red">WORKS</span></div>
               </div>
             </div>
             
             {/* Tech label floating */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 bg-red p-4 rounded-[4px] shadow-2xl z-20"
             >
               <Settings className="text-white w-8 h-8" />
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Edge decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-bg angled-divider-top"></div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    { 
      title: "Naprawy Mechaniczne", 
      desc: "Kompleksowy serwis silnika, układu hamulcowego oraz zawieszenia.",
      icon: <Wrench size={24}/>
    },
    { 
      title: "Diagnostyka Komputerowa", 
      desc: "Szybkie wykrywanie i usuwanie usterek elektronicznych pojazdu.",
      icon: <Search size={24}/>
    },
    { 
      title: "Serwis Klimatyzacji", 
      desc: "Napełnianie, odgrzybianie oraz sprawdzanie szczelności układu AC.",
      icon: <Settings size={24}/>
    },
    { 
      title: "Wymiana Olejów i Płynów", 
      desc: "Serwis eksploatacyjny z użyciem produktów najwyższej jakości.",
      icon: <Clock size={24}/>
    },
    { 
      title: "Naprawa Skrzyń Biegów", 
      desc: "Diagnostyka i regeneracja manualnych oraz automatycznych skrzyń.",
      icon: <Settings size={24}/>
    },
    { 
      title: "Układ Wydechowy", 
      desc: "Wymiana katalizatorów, tłumików oraz spawanie elementów układu.",
      icon: <Wrench size={24}/>
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl mb-2">NASZE <span className="text-red">USŁUGI</span></h2>
          <div className="section-accent-line"></div>
          <p className="text-text-muted max-w-2xl font-medium">
            Zapewniamy pełen zakres usług serwisowych dla samochodów wszystkich marek. 
            Wykorzystujemy nowoczesny sprzęt i bogate doświadczenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="garage-card group"
            >
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-[4px] mb-6 group-hover:bg-red/10 transition-colors">
                <div className="text-red">{service.icon}</div>
              </div>
              <h3 className="text-2xl mb-3 font-subheading tracking-wide underline decoration-white/10 underline-offset-8 decoration-dashed group-hover:decoration-red/50 transition-all">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-bg-section relative overflow-hidden angled-divider-top angled-divider-bottom pb-32 pt-32">
      <div className="absolute inset-0 carbon-fiber opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border-l-2 border-blue-500 py-1 px-4 mb-6">
          <Facebook className="text-blue-500 w-4 h-4" />
          <span className="font-mono text-blue-500 text-xs tracking-tighter uppercase">Recenzje Klientów</span>
        </div>
        <h2 className="text-5xl md:text-7xl mb-8">CO MÓWIĄ <span className="text-blue-500">O NAS?</span></h2>
        
        <div className="bg-bg-light/80 backdrop-blur-md p-10 rounded-[6px] border border-white/5 relative shadow-2xl group">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
               <MessageSquare className="text-white" />
             </div>
             <p className="text-xl text-white italic mb-8 font-medium leading-relaxed">
               "Polecam! Doskonałe doradztwo, szybka wymiana układu wydechowego, zawieszenia. Warto! Dobry kontakt telefoniczny."
             </p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <a 
                href="https://www.facebook.com/profile.php?id=61566455590132&sk=reviews" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary bg-linear-to-r from-blue-600 to-blue-400 flex items-center gap-2 px-10"
               >
                 ZOBACZ OPINIE <ExternalLink size={18} />
               </a>
               <div className="flex items-center gap-1">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="text-yellow-500 w-5 h-5 fill-current">★</div>
                 ))}
                 <span className="text-white font-mono ml-2">5.0</span>
               </div>
             </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">NASZA <span className="text-red">LOKALIZACJA</span></h2>
            <div className="section-accent-line"></div>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-[4px] shrink-0">
                  <MapPin className="text-red" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-subheading mb-1">ADRES</h4>
                  <p className="text-text-muted">Gniewomierowice 129A,<br />59-222 Gniewomierowice</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-[4px] shrink-0">
                  <Clock className="text-red" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-subheading mb-1">GODZINY OTWARCIA</h4>
                  <p className="text-text-muted">Poniedziałek - Piątek: 8:00 - 17:00<br />Sobota: Po ustaleniu</p>
                </div>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//Gniewomirowice+129A,+59-222+Gniewomirowice" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              WYZNACZ TRASĘ <ChevronRight size={18} />
            </a>
          </div>

          <div className="relative p-2 bg-bg-light border border-white/5 rounded-[12px] shadow-2xl">
            <div className="absolute -top-4 -left-4 bg-orange p-3 rounded-[4px] z-10 shadow-lg">
              <ShieldCheck className="text-white" />
            </div>
            <div className="overflow-hidden rounded-[8px] h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.784460501008!2d16.067343677062787!3d51.223046131435915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f136443fb5763%3A0x9a10f27fb0745240!2sGniewomirowice%20129A%2C%2059-222%20Gniewomirowice!5e0!3m2!1spl!2spl!4v1778823437882!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 brushed-metal relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-bg/60 backdrop-blur-lg p-12 rounded-[12px] border border-white/5 shadow-2xl relative">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red/20 transition-all border border-white/5">
                <Phone className="text-red w-8 h-8" />
              </div>
              <h4 className="text-white text-2xl font-subheading mb-2">TELEFON</h4>
              <a href="tel:696177041" className="text-text-muted hover:text-red transition-colors text-lg font-mono tracking-tight">696 177 041</a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red/20 transition-all border border-white/5">
                <Mail className="text-red w-8 h-8" />
              </div>
              <h4 className="text-white text-2xl font-subheading mb-2">EMAIL</h4>
              <a href="mailto:autoworks.gmiro@gmail.com" className="text-text-muted hover:text-red transition-colors text-lg">autoworks.gmiro@gmail.com</a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red/20 transition-all border border-white/5">
                <Facebook className="text-red w-8 h-8" />
              </div>
              <h4 className="text-white text-2xl font-subheading mb-2">FACEBOOK</h4>
              <a 
                href="https://www.facebook.com/profile.php?id=61566455590132" 
                target="_blank" 
                rel="noreferrer" 
                className="text-text-muted hover:text-red transition-colors text-lg"
              >
                AutoWorks Profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 overflow-hidden rounded-[4px] border border-white/10">
            <img src={FAVICON_URL} alt="AutoWorks Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-xl tracking-tighter text-white">AUTO<span className="text-red">WORKS</span></span>
        </div>

        <div className="text-text-muted text-sm font-mono tracking-tighter">
          &copy; {new Date().getFullYear()} AUTOWORKS SERWIS SAMOCHODOWY. WSZYSTKIE PRAWA ZASTRZEŻONE.
        </div>

        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61566455590132" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 hover:bg-red/20 text-white flex items-center justify-center rounded-full transition-all border border-white/5">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full carbon-fiber opacity-10 pointer-events-none skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-4">O NASZYM <span className="text-red">SERWISIE</span></h2>
            <div className="section-accent-line"></div>
            
            <div className="space-y-6 text-lg text-text-muted font-medium">
              <p>
                AutoWorks to miejsce, gdzie pasja do motoryzacji spotyka się z najwyższymi standardami technicznymi. Nasz warsztat w Gniewomierowicach powstał z myślą o kierowcach, którzy nie uznają kompromisów w kwestii bezpieczeństwa i sprawności swoich pojazdów.
              </p>
              <p>
                Specjalizujemy się w zaawansowanej mechanice i diagnostyce. Każdy samochód traktujemy z precyzją chirurga, dbając o to, by każda część i każda śruba była na swoim miejscu. U nas "dobrze" to za mało – dążymy do perfekcji.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
              <div className="bg-bg-light p-4 sm:p-6 border-l-2 border-orange">
                <div className="font-display text-2xl sm:text-4xl text-white mb-1">100%</div>
                <div className="font-mono text-[10px] text-orange uppercase tracking-wider">Zaangażowania</div>
              </div>
              <div className="bg-bg-light p-4 sm:p-6 border-l-2 border-red">
                <div className="font-display text-lg sm:text-2xl lg:text-4xl text-white mb-1 break-words">PROFESJONALNY</div>
                <div className="font-mono text-[10px] text-red uppercase tracking-wider">Sprzęt Diagnostyczny</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-bg-light rounded-[6px] border border-white/5 overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000" 
                alt="Garage interior" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-4 right-4 font-mono text-[10px] text-red/50 text-right leading-tight">
                SYS_DIAG_OK<br />
                ENGINE_SCAN_001<br />
                TORQUE_SYNCED
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-linear-to-br from-red to-orange p-8 rounded-[4px] shadow-2xl max-w-[280px]">
              <ShieldCheck className="text-white w-10 h-10 mb-4" />
              <h4 className="font-display text-2xl text-white mb-2 underline decoration-white/20 underline-offset-4">GWARANCJA JAKOŚCI</h4>
              <p className="text-white/80 text-sm font-subheading">Stosujemy wyłącznie certyfikowane części i oleje renomowanych producentów.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <LocationSection />
      <Contact />
      <Footer />
    </div>
  );
}
