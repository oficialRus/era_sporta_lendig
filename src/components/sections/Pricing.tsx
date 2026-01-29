import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const plans = [
  {
    name: "Старт",
    price: "2 900",
    period: "/ мес",
    features: [
      "Доступ в тренажерный зал",
      "Раздевалка и душ",
      "Вводная тренировка",
      "Доступ с 08:00 до 17:00"
    ],
    highlight: false
  },
  {
    name: "Прогресс",
    price: "4 900",
    period: "/ мес",
    features: [
      "Круглосуточный доступ 24/7",
      "Групповые программы",
      "Финская сауна",
      "Заморозка на 30 дней",
      "Гостевой визит (1 раз/мес)"
    ],
    highlight: true
  },
  {
    name: "Элита",
    price: "8 900",
    period: "/ мес",
    features: [
      "Все преимущества Прогресс",
      "Персональные тренировки (4/мес)",
      "Составление программы питания",
      "Массаж (1 сеанс/мес)",
      "Отдельная VIP раздевалка"
    ],
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-zinc-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">Клубные <span className="text-red-600">Карты</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Инвестируйте в свое здоровье. Выберите карту, которая соответствует вашим целям и образу жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${plan.highlight ? 'bg-zinc-900 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.1)] scale-105 z-10' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Хит продаж
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 uppercase">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-white">{plan.price} ₽</span>
                <span className="text-zinc-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full"
              >
                Выбрать карту
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

