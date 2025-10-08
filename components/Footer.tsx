
import React from 'react';
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
      <span className="text-2xl font-bold font-montserrat text-white">Smart World Logistic</span>
    </div>
  );

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <SWLLogo />
            <p className="text-gray-300">Международная логистика нового поколения.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navLinks.map((link: NavLink) => (
                <li key={link.name}><a href={link.href} className="text-gray-300 hover:text-electric-blue transition-colors">{link.name}</a></li>
              ))}
              <li><a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">Личный кабинет</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start"><span className="mr-2 mt-1">📍</span><span>123456, г. Москва, Пресненская наб., 12</span></li>
              <li className="flex items-center"><span className="mr-2">📞</span><a href="tel:+74951234567" className="hover:text-electric-blue transition-colors">+7 (495) 123-45-67</a></li>
              <li className="flex items-center"><span className="mr-2">✉️</span><a href="mailto:info@swl.com" className="hover:text-electric-blue transition-colors">info@swl.com</a></li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-lg font-semibold font-montserrat mb-4">Подпишитесь на новости</h3>
             <form className="flex">
                <input type="email" placeholder="Ваш Email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-electric-blue" />
                <button type="submit" className="bg-electric-blue px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" />
                    </svg>
                </button>
             </form>
          </div>
          
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart World Logistic. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
