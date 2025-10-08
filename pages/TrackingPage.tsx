
import React, { useState } from 'react';

interface TrackingEvent {
    status: string;
    location: string;
    date: string;
    icon: React.ElementType;
}

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const TruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875" />
  </svg>
);
const WarehouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21" />
  </svg>
);


const mockTrackingData: TrackingEvent[] = [
    { status: "Доставлен", location: "Склад получателя, Москва", date: "20.07.2024 14:30", icon: CheckCircleIcon },
    { status: "В пути к получателю", location: "Распределительный центр, Москва", date: "20.07.2024 09:00", icon: TruckIcon },
    { status: "Прошел таможенную очистку", location: "Таможенный пост, Москва", date: "19.07.2024 17:00", icon: WarehouseIcon },
    { status: "Прибыл в страну назначения", location: "Аэропорт Шереметьево, Москва", date: "19.07.2024 11:20", icon: WarehouseIcon },
    { status: "Отправлен из страны отправления", location: "Аэропорт Пудун, Шанхай", date: "17.07.2024 22:45", icon: TruckIcon },
    { status: "Принят на склад", location: "Склад Smart World Logistic, Шанхай", date: "16.07.2024 15:00", icon: WarehouseIcon },
    { status: "Заказ создан", location: "Информация получена от отправителя", date: "16.07.2024 10:00", icon: CheckCircleIcon },
];

const TrackingPage: React.FC = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<TrackingEvent[] | null>(null);
    const [error, setError] = useState('');

    const handleTrack = () => {
        if (!trackingNumber) {
            setError('Пожалуйста, введите номер для отслеживания.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult(null);
        setTimeout(() => {
            if (trackingNumber.toLowerCase() === 'swl123456') {
                setResult(mockTrackingData);
            } else {
                setError('Заказ с таким номером не найден. Попробуйте "SWL123456".');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold font-montserrat text-deep-navy">Отслеживание груза</h1>
                    <p className="mt-4 text-lg text-medium-gray">
                        Введите номер накладной или заказа, чтобы узнать актуальный статус и местоположение вашего груза.
                    </p>
                </div>
                <div className="mt-12 max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        placeholder="Например, SWL123456"
                        className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    />
                    <button onClick={handleTrack} disabled={isLoading} className="bg-electric-blue text-white font-semibold px-8 py-4 rounded-md text-lg hover:bg-opacity-90 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Отследить'}
                    </button>
                </div>
                
                <div className="mt-12 max-w-4xl mx-auto">
                    {error && <p className="text-center text-swl-red">{error}</p>}
                    {result && (
                         <div className="bg-light-gray p-8 rounded-lg">
                            <h2 className="text-2xl font-bold font-montserrat text-deep-navy">Статус заказа: {trackingNumber.toUpperCase()}</h2>
                            <div className="mt-6 border-l-2 border-electric-blue ml-3">
                                {result.map((event, index) => (
                                    <div key={index} className="relative mb-8 pl-8">
                                        <div className="absolute -left-4 top-0 bg-electric-blue text-white rounded-full h-8 w-8 flex items-center justify-center">
                                            <event.icon className="h-5 w-5" />
                                        </div>
                                        <p className={`font-semibold text-lg ${index === 0 ? 'text-electric-blue' : 'text-deep-navy'}`}>{event.status}</p>
                                        <p className="text-medium-gray text-sm">{event.location}</p>
                                        <p className="text-medium-gray text-sm">{event.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;
