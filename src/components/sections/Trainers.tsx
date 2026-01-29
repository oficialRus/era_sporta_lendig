import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Instagram, Twitter } from 'lucide-react';
import trainerFemale from '../../assets/images/trainer-female.png';
import trainerMale from '../../assets/images/trainer-male.png';

const trainers = [
  {
    name: "Анна Волкова",
    role: "Йога & Стретчинг",
    image: trainerFemale,
    description: "Сертифицированный инструктор с 7-летним стажем. Поможет обрести гармонию."
  },
  {
    name: "Дмитрий Соколов",
    role: "Бодибилдинг & Силовые",
    image: trainerMale,
    description: "Мастер спорта по бодибилдингу. Специализируется на наборе мышечной массы.",
    isMale: true
  },
  {
    name: "Елена Морозова",
    role: "CrossFit & Кардио",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Fallback/Placeholder for variety if needed, but I'll reuse female image or find another if strictly local. Let's reuse female for now or just have 2 trainers to match images found.
    // Actually I only downloaded 2 trainer images. I will stick to 2 featured trainers centered or 3 with a placeholder.
    // I'll use a placeholder from Unsplash for the 3rd one to make the grid look good, or just 2.
    // Let's go with 2 for now to be safe with local assets.
    description: "Эксперт по функциональному тренингу. Заставит вас попотеть.",
    hidden: true
  }
];

export const Trainers = () => {
  return (
    <Section id="trainers" className="bg-zinc-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">Команда <span className="text-red-600">Профи</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Наши тренеры — это ваша поддержка и мотивация. Они помогут достичь целей быстрее и безопаснее.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.filter(t => !t.hidden).map((trainer, index) => (
            <div key={index} className="bg-zinc-800 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-zinc-700 hover:border-red-600/50">
              <div className="h-[400px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {trainer.role}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{trainer.name}</h3>
                <p className="text-zinc-400 mb-6">{trainer.description}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Twitter size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

