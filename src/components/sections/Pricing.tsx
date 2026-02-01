import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const buildTelegramUrl = (message: string) =>
  `https://t.me/+79180855258?text=${encodeURIComponent(message)}`;

const plans = [
  {
    name: "Вездеход",
    subtitle: "1 месяц",
    price: "8 490",
    period: "/ мес",
    features: [
      "Доступ в тренажерный зал",
      "Раздевалка и душ",
      "Доступ в бассейн",
      "20 дней заморозки",
      "Групповые занятия"
    ],
    highlight: false
  },
  {
    name: "Вездеход",
    subtitle: "6 месяцев",
    price: "23 990",
    period: "/ мес",
    features: [
      "Доступ в тренажерный зал",
      "Раздевалка и душ",
      "Доступ в бассейн",
      "2 гостевых визита",
      "Групповые занятия"
    ],
    highlight: true
  },
  {
    name: "Вездеход",
    subtitle: "12 месяцев",
    price: "32 490",
    period: "/ мес",
    features: [
      "Доступ в тренажерный зал",
      "Раздевалка и душ",
      "Доступ в бассейн",
      "20 дней заморозки",
      "Групповые занятия"
    ],
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-zinc-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            <span className="text-red-600">Безлимитные</span> <span className="text-white">абонементы</span> ежедневного посещения
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Инвестируйте в свое здоровье. Выберите абонемент, который соответсвует вашим целям и образу жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => {
            const planLabel = plan.subtitle ? `${plan.name} — ${plan.subtitle}` : plan.name;
            const telegramUrl = buildTelegramUrl(
              `Здравствуйте. Меня заинтересовал абонемент «${planLabel}» в вашем спортзале. Расскажите, пожалуйста, подробнее.`
            );
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border ${plan.highlight ? 'bg-zinc-900 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.1)] scale-105 z-10' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'}`}
              >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                  Хит продаж
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 uppercase text-center">
                {plan.name}
                {plan.subtitle && <span className="block text-base font-bold text-white normal-case">{plan.subtitle}</span>}
              </h3>
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
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Выбрать
              </Button>
            </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

