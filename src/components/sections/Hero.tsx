import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import heroBg from '../../assets/images/hero-bg.png';

export const Hero = () => {
  const telegramMessage = encodeURIComponent(
    'Здравствуйте! Хотелось бы подробнее узнать о направлениях в вашем фитнес-клубе.'
  );
  const telegramUrl = `https://t.me/+79180855258?text=${telegramMessage}`;

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Gym Background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-tight mb-6">
            Создай <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">лучшую</span><br />
            версию себя<br />
            в <span className="text-red-600">Эра Спорта</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
            Премиальный фитнес-клуб с профессиональным оборудованием, лучшими тренерами и атмосферой, которая мотивирует на победы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" href={telegramUrl} target="_blank" rel="noreferrer">
              Начать тренировки
            </Button>
            <Button variant="outline" size="lg" href={telegramUrl} target="_blank" rel="noreferrer">
              Узнать больше
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

