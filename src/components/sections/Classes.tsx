import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import yogaImg from '../../assets/images/yoga-class.png';
import boxingImg from '../../assets/images/boxing-class.png';
import crossfitImg from '../../assets/images/crossfit-class.png';
import poolTennisImg from '../../assets/images/pool-table-tennis.png';

const classes = [
  {
    title: "Йога & Пилатес",
    image: yogaImg,
    description: "Восстановите баланс тела и разума. Улучшите гибкость и снимите стресс.",
    time: "Пн, Ср, Пт • 09:00"
  },
  {
    title: "Бокс & MMA",
    image: boxingImg,
    description: "Интенсивные тренировки для развития силы, скорости и выносливости.",
    time: "Вт, Чт • 19:00"
  },
  {
    title: "CrossFit",
    image: crossfitImg,
    description: "Функциональный тренинг высокой интенсивности для максимальных результатов.",
    time: "Ежедневно • 18:00"
  },
  {
    title: "Бассейн и Настольный тенис",
    image: poolTennisImg,
    description: "Расслабьтесь в бассейне и зарядитесь энергией за партией в теннис.",
    time: "Ежедневно • 08:00 - 22:00"
  }
];

export const Classes = () => {
  return (
    <Section id="classes" className="bg-zinc-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">Наши <span className="text-red-600">Секции</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Выбирайте направление, которое подходит именно вам. От спокойной йоги до взрывного кроссфита.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{item.title}</h3>
                <p className="text-zinc-300 mb-4 text-sm">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-sm">{item.time}</span>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black hover:border-white">
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

