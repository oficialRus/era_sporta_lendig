import React from 'react';
import { Clock, Users, Zap, Trophy } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const features = [
  {
    icon: <Clock className="w-10 h-10 text-red-600" />,
    title: "С 08:00",
    description: (
      <>
        Режим работы:
        <br />
        Пн–Пт — 08:00–21:45
        <br />
        Сб–Вс — 09:00–19:45
      </>
    )
  },
  {
    icon: <Users className="w-10 h-10 text-red-600" />,
    title: "Профи Тренеры",
    description: "Наша команда состоит из сертифицированных специалистов с опытом работы более 5 лет.",
    href: "#trainers"
  },
  {
    icon: <Zap className="w-10 h-10 text-red-600" />,
    title: "Премиальное Оборудование",
    description: "Современные тренажеры от ведущих мировых брендов."
  },
  {
    icon: <Trophy className="w-10 h-10 text-red-600" />,
    title: "Результат",
    description: "Мы гарантируем результат при соблюдении рекомендаций наших тренеров и регулярных занятиях."
  }
];

export const Features = () => {
  return (
    <Section id="features" className="bg-zinc-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const cardContent = (
              <>
                <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </>
            );
            const cardClass = "bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-red-600/50 transition-all hover:-translate-y-2 group block";
            return 'href' in feature && feature.href ? (
              <a key={index} href={feature.href} className={cardClass}>
                {cardContent}
              </a>
            ) : (
              <div key={index} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

