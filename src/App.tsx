/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowRight,
  ChevronDown,
  Star,
  Quote
} from 'lucide-react';
import { cn } from './lib/utils';
import { MENU_ITEMS, GALLERY_IMAGES, FEATURED_DISHES, MenuItem } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Featured', href: '#featured' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[70] transition-all duration-700 px-6",
        isScrolled || isMobileMenuOpen ? "py-4" : "py-6",
        isScrolled && !isMobileMenuOpen ? "bg-stone-950/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[80]">
          <a href="#" className="group">
            <span className="text-2xl font-serif tracking-[0.3em] uppercase text-white group-hover:text-gold transition-colors duration-500">
              The Olive Tree
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-semibold text-stone-400 hover:text-gold transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="px-8 py-3 bg-gold text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 rounded-full">
              Reservations
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 relative z-[80]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-stone-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl uppercase tracking-[0.4em] text-stone-300 font-serif hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 px-12 py-4 bg-gold text-stone-950 text-xs uppercase tracking-widest font-bold rounded-full">
              Book a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic Food" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-[1px] bg-gold mx-auto mb-8"
          />
          <span className="text-gold uppercase tracking-[0.6em] text-[10px] mb-6 block font-bold">
            Fine Dining Experience
          </span>
          <h1 className="text-6xl md:text-9xl text-white font-serif mb-10 leading-[0.9] tracking-tighter">
            The Art of <br />
            <span className="italic text-gradient-gold">Gastronomy</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
            <a href="#menu" className="group relative px-12 py-5 bg-white text-stone-950 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500 rounded-full overflow-hidden">
              <span className="relative z-10">Explore Menu</span>
              <motion.div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a href="#contact" className="group px-12 py-5 border border-white/30 text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:border-white transition-all duration-500 rounded-full flex items-center gap-3">
              Reserve Table
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

const FeaturedDishes = () => {
  return (
    <section id="featured" className="py-32 px-6 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">Chef's Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Signature Creations</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-stone-400 text-sm leading-relaxed italic"
          >
            Hand-crafted masterpieces that define our culinary philosophy. Each dish is a balance of tradition and innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {FEATURED_DISHES.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-gold text-[10px] uppercase tracking-widest mb-2 block font-bold">{dish.category}</span>
                  <h3 className="text-2xl font-serif text-white mb-2">{dish.name}</h3>
                  <p className="text-stone-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Appetizer' | 'Main' | 'Dessert'>('Main');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const categories: ('Appetizer' | 'Main' | 'Dessert')[] = ['Appetizer', 'Main', 'Dessert'];

  return (
    <section id="menu" className="py-32 px-6 bg-stone-900/30">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] mb-6 block font-bold">The Menu</span>
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-12">Culinary Journey</h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 border",
                activeCategory === cat 
                  ? "bg-gold border-gold text-stone-950" 
                  : "bg-transparent border-white/10 text-stone-400 hover:border-gold hover:text-gold"
              )}
            >
              {cat}s
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {MENU_ITEMS.filter(item => item.category === activeCategory).map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group bg-stone-950/40 rounded-3xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-40" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-serif text-white group-hover:text-gold transition-colors duration-500">
                      {item.name}
                    </h3>
                    <span className="text-gold font-serif">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed italic line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-stone-500 text-xs uppercase tracking-widest mb-8">All prices are inclusive of service charge</p>
          <button className="group px-16 py-5 border border-gold text-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-stone-950 transition-all duration-700 rounded-full">
            Download Full Menu
          </button>
        </motion.div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-stone-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-stone-950/50 text-white rounded-full hover:bg-gold hover:text-stone-950 transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">
                  {selectedItem.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                  {selectedItem.name}
                </h3>
                <div className="w-12 h-[1px] bg-gold mb-8" />
                <p className="text-stone-400 text-sm leading-relaxed italic mb-10">
                  {selectedItem.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-10 border-t border-white/5">
                  <span className="text-3xl font-serif text-gold">{selectedItem.price}</span>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="px-10 py-4 bg-gold text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 rounded-full"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-32 px-6 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">Atmosphere</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">The Visual Experience</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-stone-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-900/20 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-bold">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
              Where Passion <br /> Meets the <span className="italic text-gold">Plate</span>
            </h2>
            <div className="space-y-8 text-stone-400 text-sm leading-relaxed max-w-xl">
              <p>
                At The Olive Tree, we believe that dining is more than just a meal—it's a sensory journey. Our kitchen is a laboratory of flavors where ancient Mediterranean techniques meet modern culinary innovation.
              </p>
              <p>
                Founded in 2022, our mission has always been to celebrate the purity of the earth's bounty. We work directly with local artisans and sustainable producers to ensure that every ingredient on your plate is at its peak of perfection.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <span className="text-3xl font-serif text-white block mb-2">3+</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500">Years of Excellence</span>
              </div>
              <div>
                <span className="text-3xl font-serif text-white block mb-2">5</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500">Stars dining experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200" 
              alt="Chef at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-950/20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass-dark p-10 rounded-2xl max-w-xs hidden md:block"
          >
            <Quote className="text-gold mb-6" size={32} />
            <p className="text-white font-serif italic text-lg leading-relaxed">
              "Cooking is an act of love, a gift to be shared with the world."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Executive Chef</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-stone-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-bold">Contact Us</span>
            <h2 className="text-5xl font-serif text-white mb-12">Join Our <br /> Table</h2>
            
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-gold group-hover:scale-110 transition-transform" size={20} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">Address</h4>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed pl-9">
                  The Olive Tree - Molito Lifestyle Center <br/>
                  The Olive Tree Makati - Belamy House, Jupiter Makati
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="text-gold group-hover:scale-110 transition-transform" size={20} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">Reservations</h4>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed pl-9">
                  +1 (555) 123-4567 <br /> booking@theolivetree.com
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="text-gold group-hover:scale-110 transition-transform" size={20} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">Opening Hours</h4>
                </div>
                <div className="text-stone-400 text-sm leading-relaxed pl-9 space-y-1">
                  <p>Mon - Thu: 17:00 - 22:00</p>
                  <p>Fri - Sat: 12:00 - 23:00</p>
                  <p>Sunday: 12:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-12 rounded-3xl border border-white/5"
            >
              <form className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="relative group">
                    <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white placeholder:text-stone-600 outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white placeholder:text-stone-600 outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-stone-600 outline-none focus:border-gold focus:text-white transition-colors appearance-none">
                      <option className="bg-stone-950">2 Guests</option>
                      <option className="bg-stone-950">4 Guests</option>
                      <option className="bg-stone-950">6+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="relative group">
                    <input type="date" className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-stone-600 outline-none focus:border-gold focus:text-white transition-colors" />
                  </div>
                  <div className="relative group">
                    <textarea rows={4} placeholder="Special Requests" className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white placeholder:text-stone-600 outline-none focus:border-gold transition-colors resize-none" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full py-6 bg-gold text-stone-950 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-700 rounded-full">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-stone-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <a href="#" className="text-3xl font-serif tracking-[0.4em] uppercase text-white">
            The Olive Tree
          </a>
          
          <div className="flex gap-12">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:text-gold transition-colors font-bold">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-stone-600 font-medium">
          <p>© 2026 The Olive Tree Fine Dining. Crafted for Excellence.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-stone-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <MenuSection />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

