
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import type { NavLink } from '../types';

const SWLLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-electric-blue">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold font-montserrat text-deep-navy">Smart World Logistic</span>
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = { color: '#0066FF', fontWeight: '600' };

  const NavLinks: React.FC<{className?: string}> = ({ className }) => (
     <nav className={className}>
        {navLinks.map((link: NavLink) => (
          <RouterNavLink
            key={link.name}
            to={link.href}
            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            className="font-semibold text-deep-navy hover:text-electric-blue transition-colors duration-300 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </RouterNavLink>
        ))}
        <RouterNavLink to="#" className="font-semibold text-deep-navy hover:text-electric-blue transition-colors duration-300 py-2">Личный кабинет</RouterNavLink>
    </nav>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <RouterNavLink to="/" aria-label="Home"><SWLLogo /></RouterNavLink>
          <div className="hidden lg:flex items-center space-x-8">
             <NavLinks className="flex items-center space-x-8" />
             <RouterNavLink to="/calculator" className="bg-electric-blue text-white font-semibold px-6 py-2.5 rounded-md hover:bg-opacity-90 transition-all text-sm">
                Рассчитать стоимость
             </RouterNavLink>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-deep-navy focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
            <NavLinks className="flex flex-col items-center space-y-4 py-8" />
            <div className="p-4 border-t border-gray-200">
                <RouterNavLink to="/calculator" className="w-full text-center block bg-electric-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all text-sm">
                    Рассчитать стоимость
                </RouterNavLink>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
