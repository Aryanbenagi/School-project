
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, BookOpen, Users, Crown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClipboardEdit } from 'lucide-react';

const navigationItems = [
  { title: "Home", url: createPageUrl("HomePage"), icon: Home },
  { title: "About Us", url: createPageUrl("AboutUs"), icon: BookOpen },
  { title: "Contact", url: createPageUrl("Contact"), icon: Phone },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .metallic-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
        }
        
        .steel-blue-gradient {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        .glow-hover:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .metallic-text {
          background: linear-gradient(135deg, #e2e8f0, #94a3b8, #64748b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .animated-border {
          position: relative;
          overflow: hidden;
        }
        
        .animated-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          animation: slide 3s infinite;
        }
        
        @keyframes slide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .nav-link {
          position: relative;
          background: linear-gradient(135deg, transparent, rgba(148, 163, 184, 0.05), transparent);
          border: 1px solid rgba(71, 85, 105, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover {
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1));
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
        
        .nav-link .nav-icon {
          transition: all 0.3s ease;
        }
        
        .nav-link:hover .nav-icon {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
          transform: scale(1.1);
        }
        
        .nav-link.active .nav-icon {
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
        }
        
        .navbar-shadow {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.1);
        }
        
        .logo-glow {
          filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.3));
          transition: all 0.3s ease;
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.5));
          transform: scale(1.02);
        }
      `}</style>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-700/50 navbar-shadow' 
            : 'bg-black/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Left Section: Logo + School Identity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-5"
            >
              <Link to={createPageUrl("HomePage")} className="flex items-center space-x-5 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-white rounded-full p-1 logo-glow border border-gray-600/30">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/d5c831056_ChatGPTImageSep12202512_32_39PM.png" 
                      alt="School Logo" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <div className="hidden lg:block">
                  <motion.h1 
                    className="text-2xl font-bold metallic-text leading-tight group-hover:text-blue-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    Padmashri Ramsing Bhanawat
                  </motion.h1>
                  <p className="text-sm font-medium text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    High School & Jr. College • Arts, Commerce & Science
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Center Section: Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-2">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      to={item.url}
                      className={`nav-link flex items-center space-x-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-400 ${
                        isActive 
                          ? 'active text-white' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <item.icon className="nav-icon w-4 h-4" />
                      <span className="whitespace-nowrap">{item.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Right Section: Mobile Menu + Admission Button */}
            <div className="flex items-center space-x-4">
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                 <Button asChild className="hidden xl:flex steel-blue-gradient glow-hover">
                   <Link to={createPageUrl("Admission")}>
                     <ClipboardEdit className="w-4 h-4 mr-2" />
                     Admissions Open
                   </Link>
                 </Button>
               </motion.div>

              {/* Mobile Menu Button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="xl:hidden relative w-12 h-12 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/70 hover:border-blue-500/30 transition-all duration-300 glow-hover"
                  >
                    <motion.div
                      animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {mobileMenuOpen ? (
                        <X className="h-5 w-5 text-slate-300" />
                      ) : (
                        <Menu className="h-5 w-5 text-slate-300" />
                      )}
                    </motion.div>
                  </Button>
                </SheetTrigger>
                
                <SheetContent side="right" className="w-80 bg-gray-900/98 border-l border-gray-700/50 backdrop-blur-xl">
                  <SheetHeader className="text-left border-b border-gray-700/50 pb-6">
                    <SheetTitle className="flex items-center space-x-3 text-white">
                      <div className="w-12 h-12 bg-white rounded-full p-1">
                        <img 
                          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/d5c831056_ChatGPTImageSep12202512_32_39PM.png" 
                          alt="School Logo" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg metallic-text">School Menu</div>
                        <div className="text-xs text-slate-400 font-normal">Navigation</div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col space-y-2 mt-8">
                    {navigationItems.map((item, index) => {
                      const isActive = location.pathname === item.url;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`nav-link flex items-center space-x-3 px-4 py-4 rounded-xl font-medium transition-all duration-400 ${
                              isActive
                                ? 'active text-white'
                                : 'text-slate-300 hover:text-white'
                            }`}
                          >
                            <item.icon className="nav-icon w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                        <Link
                            to={createPageUrl("Admission")}
                            onClick={() => setMobileMenuOpen(false)}
                            className="nav-link flex items-center space-x-3 px-4 py-4 rounded-xl font-medium transition-all duration-400 steel-blue-gradient text-white"
                        >
                            <ClipboardEdit className="nav-icon w-5 h-5" />
                            <span>Admissions Open</span>
                        </Link>
                     </motion.div>
                  </nav>
                  
                  {/* Mobile Contact Info */}
                  <div className="mt-8 pt-6 border-t border-gray-700/50 space-y-3">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Contact Information
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>07947417946</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <span>prbschool123@gmail.com</span>
                      </div>
                      <div className="flex items-start space-x-3 text-slate-300">
                        <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                        <div className="text-xs leading-relaxed">
                          Vasantrao Naik Nagar, Vijapur Rd,<br />
                          near Jagruti School, Solapur, MH 413003
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black border-t border-gray-800 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                 <div className="w-12 h-12 bg-white rounded-full p-1">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/d5c831056_ChatGPTImageSep12202512_32_39PM.png" 
                    alt="School Logo" 
                    className="w-full h-full rounded-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg metallic-text">Padmashri Ramsing Bhanawat</h3>
                  <p className="text-blue-400 text-sm font-medium">High School & Jr. College</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering minds with excellence in Arts, Commerce, and Science education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6 metallic-text">Quick Links</h4>
              <ul className="space-y-3">
                {navigationItems.slice(0).map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.url}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to={createPageUrl("Admission")}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ClipboardEdit className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Admissions</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-lg mb-6 metallic-text">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>07947417946</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>prbschool123@gmail.com</span>
                </p>
                <p className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span className="text-sm leading-relaxed">
                    Vasantrao Naik Nagar, Vijapur Rd,<br />
                    near Jagruti School, Solapur,<br />
                    Maharashtra 413003
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold text-lg mb-6 metallic-text">Office Hours</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Monday - Saturday</span>
                  </span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center"
          >
            <p className="text-gray-500">
              © 2024 Padmashri Ramsing Bhanawat High School & Jr. College. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
