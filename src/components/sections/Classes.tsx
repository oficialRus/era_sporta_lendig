import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import yogaImg from '../../assets/images/yoga-class.png';
import boxingImg from '../../assets/images/boxing-class.png';
import crossfitImg from '../../assets/images/crossfit-class.png';
import poolSwimmerImg from '../../assets/images/pool-swimmer.jpg';
import tableTennisImg from '../../assets/images/table-tennis.jpg';

const buildTelegramUrl = (message: string) =>
  `https://t.me/+79180855258?text=${encodeURIComponent(message)}`;

const classes = [
  {
    title: "Йога & Пилатес",
    image: yogaImg,
    description: "Восстановите баланс тела и разума. Улучшите гибкость и снимите стресс.",
    time: "Ежедневно • 08:00 - 21:30"
  },
  {
    title: "Бокс & MMA",
    image: boxingImg,
    description: "Интенсивные тренировки для развития силы, скорости и выносливости.",
    time: "Ежедневно • 08:00 - 21:30"
  },
  {
    title: "Кроссфит",
    image: crossfitImg,
    description: "Функциональный тренинг высокой интенсивности для максимальных результатов.",
    time: "Ежедневно • 08:00 - 21:30"
  },
  {
    title: "Настольный теннис",
    image: tableTennisImg,
    description: "Динамичные игры для развития реакции, координации и отличного настроения.",
    time: "Ежедневно • 08:00 - 21:30"
  },
  {
    title: "Бассейн",
    image: poolSwimmerImg,
    description: "Свободное плавание для восстановления и мягкой кардио-нагрузки в чистом и комфортном бассейне.",
    time: "Ежедневно • 08:00 - 21:30"
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
          {classes.map((item, index) => {
            const telegramUrl = buildTelegramUrl(
              `Здравствуйте. Меня заинтересовала секция «${item.title}» в вашем спортзале. Расскажите, пожалуйста, подробнее.`
            );
            return (
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black hover:border-white"
                    href={telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

