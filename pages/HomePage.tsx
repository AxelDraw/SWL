import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { services, advantages, testimonials, blogPosts } from '../constants';
import type { Service, Advantage, Testimonial, BlogPost } from '../types';

const Counter: React.FC<{ end: number; duration: number; suffix?: string; text: string }> = ({ end, duration, suffix = '', text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // FIX: Corrected IntersectionObserverInit properties. Removed `once` and changed `margin` to `rootMargin`.
  const isInView = useInView(ref, { rootMargin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold font-montserrat text-warm-gold">
        {count}{suffix}
      </p>
      <p className="text-white/80 mt-2">{text}</p>
    </div>
  );
};

// A simple hook to check if element is in view
const useInView = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return isInView;
};

const Section: React.FC<{id: string, children: React.ReactNode, className?: string}> = ({id, children, className=""}) => {
    const ref = useRef<HTMLDivElement>(null);
    // FIX: Removed invalid `once` property from IntersectionObserverInit.
    const inView = useInView(ref);
    
    return (
        <section id={id} ref={ref} className={`py-16 lg:py-24 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} ${className}`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

const SectionTitle: React.FC<{children: React.ReactNode, subtitle: string}> = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <p className="text-electric-blue font-semibold text-sm uppercase tracking-wider">{subtitle}</p>
        <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-deep-navy mt-2">{children}</h2>
    </div>
);


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          poster="https://picsum.photos/1920/1080?blur=5&random=hero"
        >
          {/* Using a placeholder video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connections-16249-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-deep-navy/70"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight">Международная логистика нового поколения</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Надежные и технологичные решения для вашего бизнеса. Доставляем грузы по всему миру точно в срок.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate('/calculator')} className="bg-electric-blue text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
              Рассчитать стоимость
            </button>
            <button onClick={() => navigate('/tracking')} className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-white hover:text-deep-navy transition-all transform hover:scale-105 w-full sm:w-auto">
              Отследить груз
            </button>
          </div>
          <div className="absolute bottom-[-10rem] left-1/2 -translate-x-1/2 w-full max-w-4xl mx-auto hidden md:block">
            <div className="bg-deep-navy/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl grid grid-cols-3 gap-8">
                <Counter end={120} duration={2000} suffix="+" text="Стран присутствия" />
                <Counter end={500} duration={2500} suffix="k" text="Доставленных грузов" />
                <Counter end={99} duration={1500} suffix=".7%" text="Сохранности грузов" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="pt-48 md:pt-32">
      {/* Services Section */}
      <Section id="services" className="bg-light-gray">
        <SectionTitle subtitle="Наши возможности">Комплексные логистические услуги</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex-shrink-0"><service.icon /></div>
              <h3 className="text-xl font-bold font-montserrat text-deep-navy mt-4">{service.title}</h3>
              <p className="text-medium-gray mt-2 flex-grow">{service.description}</p>
              <a href="#" className="text-electric-blue font-semibold mt-6 inline-flex items-center group">
                Подробнее
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Advantages Section */}
      <Section id="advantages">
        <SectionTitle subtitle="Почему мы?">Ваш надежный партнер</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage: Advantage, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4"><advantage.icon /></div>
              <h3 className="text-xl font-bold font-montserrat text-deep-navy">{advantage.title}</h3>
              <p className="text-medium-gray mt-2">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Calculator Section */}
      <Section id="calculator-promo" className="bg-deep-navy text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <p className="text-electric-blue font-semibold text-sm uppercase tracking-wider">Быстрый расчет</p>
                <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mt-2">Рассчитайте стоимость доставки за 1 минуту</h2>
                <p className="mt-4 text-white/80">Получите предварительный расчет стоимости и сроков доставки вашего груза. Для детального просчета перейдите в полный калькулятор.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl text-dark-gray">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Откуда" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"/>
                    <input type="text" placeholder="Куда" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"/>
                    <input type="text" placeholder="Тип груза" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"/>
                    <input type="text" placeholder="Вес (кг)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"/>
                    <button onClick={() => navigate('/calculator')} type="button" className="md:col-span-2 bg-electric-blue text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all text-lg">
                        Рассчитать
                    </button>
                </form>
            </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials">
        <SectionTitle subtitle="Нам доверяют">Отзывы наших клиентов</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial: Testimonial, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-lg">
              <img src={testimonial.logoUrl} alt={testimonial.company} className="h-8 mb-6" />
              <p className="text-medium-gray italic">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-deep-navy">{testimonial.author}</p>
                <p className="text-sm text-medium-gray">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Blog Section */}
      <Section id="blog" className="bg-light-gray">
        <SectionTitle subtitle="Будьте в курсе">Новости и аналитика</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <p className="text-sm text-medium-gray">{post.date}</p>
                        <h3 className="text-lg font-bold font-montserrat text-deep-navy mt-2 leading-tight">{post.title}</h3>
                        <p className="text-medium-gray mt-3 text-sm">{post.excerpt}</p>
                         <a href="#" className="text-electric-blue font-semibold mt-4 inline-flex items-center group">
                            Читать далее
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <button className="bg-deep-navy text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-all">Все новости</button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="bg-electric-blue text-white rounded-lg p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl lg:text-4xl font-bold font-montserrat">Готовы начать сотрудничество?</h2>
                    <p className="mt-4 text-white/80 max-w-md">Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут, чтобы обсудить детали и предложить лучшие условия.</p>
                </div>
                <form className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Ваше имя" className="w-full p-3 rounded-md text-dark-gray focus:outline-none focus:ring-2 focus:ring-warm-gold"/>
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-md text-dark-gray focus:outline-none focus:ring-2 focus:ring-warm-gold"/>
                    <textarea placeholder="Ваш вопрос" rows={3} className="w-full p-3 rounded-md text-dark-gray focus:outline-none focus:ring-2 focus:ring-warm-gold"></textarea>
                    <button type="submit" className="bg-warm-gold text-deep-navy font-bold py-3 rounded-md hover:bg-opacity-90 transition-all text-lg">Получить предложение</button>
                </form>
            </div>
        </div>
      </Section>
      </div>
    </div>
  );
};

export default HomePage;