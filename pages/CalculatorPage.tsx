
import React, { useState } from 'react';

const CalculatorPage: React.FC = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bg-light-gray">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
                <h1 className="text-3xl lg:text-5xl font-bold font-montserrat text-deep-navy">Калькулятор стоимости</h1>
                <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">
                    Заполните форму ниже, чтобы получить точный расчет стоимости и сроков доставки вашего груза.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-lg shadow-card space-y-6">
                    <div>
                        <h3 className="text-xl font-bold font-montserrat text-deep-navy mb-4 border-b pb-2">Обязательные поля</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Город отправления" id="fromCity" placeholder="Например, Москва" />
                            <InputField label="Город назначения" id="toCity" placeholder="Например, Шанхай" />
                            <SelectField label="Тип груза" id="cargoType" options={['Генеральный', 'Сборный', 'Опасный', 'Рефрижераторный']} />
                            <InputField label="Вес (кг)" id="weight" type="number" placeholder="1000" />
                            <InputField label="Объем (м³)" id="volume" type="number" placeholder="5" />
                            <InputField label="Стоимость груза (для страхования)" id="value" type="number" placeholder="500000" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-montserrat text-deep-navy mb-4 border-b pb-2">Дополнительные параметры</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField label="Срочность доставки" id="urgency" options={['Эконом', 'Стандарт', 'Экспресс']} />
                            <SelectField label="Тип упаковки" id="packaging" options={['Коробки', 'Паллеты', 'Контейнер']} />
                             <div className="md:col-span-2 space-y-3 pt-2">
                                <Checkbox label="Страхование" id="insurance" />
                                <Checkbox label="Таможенное оформление" id="customs" />
                                <Checkbox label="Доставка до двери (последняя миля)" id="lastMile" />
                             </div>
                        </div>
                    </div>
                     <button type="submit" className="w-full bg-electric-blue text-white font-semibold py-4 rounded-md hover:bg-opacity-90 transition-all text-lg">
                        Рассчитать
                    </button>
                </form>
                
                {/* Results section */}
                <div className="lg:col-span-1">
                  {showResults ? (
                    <div className="bg-white p-8 rounded-lg shadow-card sticky top-28">
                        <h3 className="text-xl font-bold font-montserrat text-deep-navy mb-4">Результаты расчета</h3>
                        <ResultCard type="Эконом" price="150 000 ₽" time="25-30 дней" popular={false} onOrder={() => alert('Заказ эконом варианта')} />
                        <ResultCard type="Стандарт" price="220 000 ₽" time="15-18 дней" popular={true} onOrder={() => alert('Заказ стандартного варианта')} />
                        <ResultCard type="Экспресс" price="450 000 ₽" time="5-7 дней" popular={false} onOrder={() => alert('Заказ экспресс варианта')} />
                    </div>
                  ) : (
                    <div className="bg-deep-navy text-white p-8 rounded-lg shadow-card sticky top-28">
                        <h3 className="text-xl font-bold font-montserrat mb-4">Ваш расчет появится здесь</h3>
                        <p className="text-white/80">После заполнения и отправки формы вы увидите несколько вариантов доставки с различными сроками и стоимостью.</p>
                        <div className="mt-6 text-warm-gold/80">
                            <p>✔️ Подробная разбивка по услугам</p>
                            <p>✔️ Возможность сохранить расчет в PDF</p>
                            <p>✔️ Быстрое оформление заказа</p>
                        </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
    </div>
  );
};

const InputField: React.FC<{label: string, id: string, type?: string, placeholder?: string}> = ({label, id, type="text", placeholder}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-dark-gray mb-1">{label}</label>
        <input type={type} id={id} placeholder={placeholder} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue" />
    </div>
);

const SelectField: React.FC<{label: string, id: string, options: string[]}> = ({label, id, options}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-dark-gray mb-1">{label}</label>
        <select id={id} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue appearance-none bg-white bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`}}>
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
    </div>
);

const Checkbox: React.FC<{label: string, id: string}> = ({label, id}) => (
    <div className="flex items-center">
        <input type="checkbox" id={id} className="h-4 w-4 text-electric-blue border-gray-300 rounded focus:ring-electric-blue" />
        <label htmlFor={id} className="ml-2 block text-sm text-dark-gray">{label}</label>
    </div>
);

const ResultCard: React.FC<{type: string, price: string, time: string, popular: boolean, onOrder: () => void}> = ({ type, price, time, popular, onOrder }) => (
    <div className={`border p-4 rounded-lg mb-4 relative ${popular ? 'border-electric-blue border-2' : 'border-gray-200'}`}>
        {popular && <div className="absolute top-0 right-4 -mt-3 bg-electric-blue text-white text-xs font-bold px-2 py-1 rounded-full">Популярный</div>}
        <div className="flex justify-between items-center">
            <h4 className="font-bold font-montserrat text-deep-navy">{type}</h4>
            <p className="text-lg font-bold text-electric-blue">{price}</p>
        </div>
        <p className="text-sm text-medium-gray mt-1">Срок доставки: {time}</p>
        <button onClick={onOrder} className={`w-full mt-4 text-sm font-semibold py-2 rounded-md transition-colors ${popular ? 'bg-electric-blue text-white hover:bg-opacity-90' : 'bg-gray-200 text-dark-gray hover:bg-gray-300'}`}>
            Заказать
        </button>
    </div>
);


export default CalculatorPage;
