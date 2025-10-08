
import React from 'react';
import type { Service, Advantage, Testimonial, BlogPost, NavLink } from './types';

const PlaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
const TruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ShipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0-2-4m-2 4-2-4m-2 4-2-4M4 12l2-4m14 4h2a2 2 0 00-2-2H4a2 2 0 00-2 2h2m14 4H4m16 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.938 6.063a9 9 0 11-3.876 0M12 21a9 9 0 000-18" />
    </svg>
);

const DocumentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const WarehouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
    </svg>
);
const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-electric-blue" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-electric-blue" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-electric-blue" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const TechIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-electric-blue" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const navLinks: NavLink[] = [
    { name: "Услуги", href: "#services" },
    { name: "Преимущества", href: "#advantages" },
    { name: "География", href: "#geography" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Блог", href: "#blog" },
    { name: "Контакты", href: "#contact" },
];

export const services: Service[] = [
  { icon: GlobeIcon, title: 'Международные перевозки', description: 'Комплексные решения для доставки грузов по всему миру. Европа, Азия, Америка.' },
  { icon: PlaneIcon, title: 'Авиаперевозки', description: 'Экспресс-доставка и чартерные рейсы для срочных и ценных грузов.' },
  { icon: TruckIcon, title: 'Автоперевозки', description: 'Гибкие и надежные перевозки сборных и выделенных грузов по суше.' },
  { icon: ShipIcon, title: 'Морские перевозки', description: 'Контейнерные, проектные и навалочные грузы с оптимальными морскими фрахтами.' },
  { icon: DocumentIcon, title: 'Таможенные услуги', description: 'Полное таможенное оформление, сертификация и ВЭД-консультации.' },
  { icon: WarehouseIcon, title: 'Складские услуги', description: 'Ответственное хранение, упаковка, маркировка и страхование грузов.' },
];

export const advantages: Advantage[] = [
  { icon: ShieldIcon, title: 'Гарантия сохранности', description: '99.7% грузов доставляются в полной сохранности благодаря строгим стандартам безопасности.' },
  { icon: ClockIcon, title: 'Соблюдение сроков', description: 'Современная IT-платформа и оптимизация маршрутов обеспечивают доставку точно в срок.' },
  { icon: SupportIcon, title: 'Персональный менеджер', description: 'Каждому клиенту предоставляется личный менеджер, доступный 24/7 для решения любых вопросов.' },
  { icon: TechIcon, title: 'Прозрачное отслеживание', description: 'Отслеживайте местоположение вашего груза в реальном времени в личном кабинете.' },
];

export const testimonials: Testimonial[] = [
  { logoUrl: 'https://picsum.photos/150/50?grayscale&random=1', quote: 'Сотрудничество со Smart World Logistic позволило нам оптимизировать логистические затраты на 15% и сократить сроки поставок из Китая на неделю.', author: 'Иван Петров', company: 'CEO, "ТехноИмпорт"' },
  { logoUrl: 'https://picsum.photos/150/50?grayscale&random=2', quote: 'Высочайший уровень сервиса и профессионализм команды. Все таможенные вопросы решаются оперативно и без нашего участия. Рекомендую!', author: 'Анна Сидорова', company: 'Директор по закупкам, "РитейлПлюс"' },
  { logoUrl: 'https://picsum.photos/150/50?grayscale&random=3', quote: 'Надежный партнер для e-commerce. Благодаря их складским услугам и быстрой доставке мы смогли значительно улучшить клиентский опыт.', author: 'Сергей Иванов', company: 'Основатель, "MegaShop.ru"' },
  { logoUrl: 'https://picsum.photos/150/50?grayscale&random=4', quote: 'Организовали сложную проектную перевозку негабаритного оборудования из Германии. Всё прошло безупречно, точно в срок и в рамках бюджета.', author: 'Ольга Кузнецова', company: 'Логист, "ПромМашСтрой"' },
];

export const blogPosts: BlogPost[] = [
  { imageUrl: 'https://picsum.photos/400/250?random=1', title: 'Изменения в таможенном законодательстве ЕАЭС в 2024 году', date: '15 июля 2024', excerpt: 'Ключевые поправки и как они повлияют на импортеров и экспортеров. Подробный разбор от наших ВЭД-экспертов.' },
  { imageUrl: 'https://picsum.photos/400/250?random=2', title: 'Тренды в контейнерных перевозках: что ждать во втором полугодии?', date: '02 июля 2024', excerpt: 'Анализ текущей ситуации на рынке морских перевозок, прогнозы по ставкам фрахта и доступности контейнеров.' },
  { imageUrl: 'https://picsum.photos/400/250?random=3', title: 'Кейс: Как мы доставили хрупкое медицинское оборудование в Якутию', date: '21 июня 2024', excerpt: 'Рассказываем о сложностях мультимодальной перевозки и решениях, которые позволили доставить груз в целости и сохранности.' },
];
