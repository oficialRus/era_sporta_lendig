import React from 'react';
import { Clock, Users, Zap, Trophy } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const features = [
  {
    icon: <Clock className="w-10 h-10 text-red-600" />,
    title: "Работаем 24/7",
    description: "Тренируйтесь в любое удобное для вас время. Мы открыты круглосуточно, без выходных и праздников."
  },
  {
    icon: <Users className="w-10 h-10 text-red-600" />,
    title: "Профи Тренеры",
    description: "Наша команда состоит из сертифицированных специалистов с опытом работы более 5 лет."
  },
  {
    icon: <Zap className="w-10 h-10 text-red-600" />,
    title: "Top Оборудование",
    description: "Современные тренажеры от ведущих мировых брендов Technogym и Hammer Strength."
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
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-red-600/50 transition-all hover:-translate-y-2 group">
              <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

