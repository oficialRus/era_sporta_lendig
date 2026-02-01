import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import trainerFemale from '../../assets/images/trainer-oksana.png';
import trainerMale from '../../assets/images/trainer-antonina.png';
import trainerTatyana from '../../assets/images/trainer-tatyana.png';
import trainerOlesya from '../../assets/images/trainer-olesya.png';
import trainerAlexander from '../../assets/images/trainer-alexander.png';
import trainerRoman from '../../assets/images/trainer-roman.png';
import trainerAnastasia from '../../assets/images/trainer-anastasia.png';
import trainerRamazan from '../../assets/images/trainer-ramazan.png';

const trainers = [
  {
    name: "Максимова Оксана",
    role: "Персональный тренер по настольному теннису",
    image: trainerFemale,
    description: "Тренер групповых направлений: ОФП, аквааэробика (утро), настольный теннис"
  },
  {
    name: "Клистова Антонина",
    role: "Персональный тренер в тренажерном зале",
    image: trainerMale,
    description:
      "Персональный тренер в тренажёрном зале. Тренер групповых направлений: йога, здоровая спина, худеем вместе. Тренер подростковой группы «level-up»"
  },
  {
    name: "Иванова Татьяна",
    role: "Персональный тренер в тренажерном зале",
    image: trainerTatyana,
    description: "Персональный тренер в тренажерном зале"
  },
  {
    name: "Чуманова Олеся",
    role: "Персональный тренер по плаванию",
    image: trainerOlesya,
    description: "Тренер по плаванию"
  },
  {
    name: "Деревщук Александр",
    role: "Персональный тренер в тренажерном зале",
    image: trainerAlexander,
    description:
      "Персональный тренер в тренажёрном зале. Тренер групповых направлений: фитнес-интенсив, аквааэробика (вечер). Тренер подростковой группы «Level-up»"
  },
  {
    name: "Федоренко Роман",
    role: "Персональный тренер по плаванию",
    image: trainerRoman,
    description: "Тренер по плаванию"
  },
  {
    name: "Брандт Анастасия",
    role: "Тренер групповых направлений: стретчинг, шейпинг",
    image: trainerAnastasia,
    description: "Персональный тренер в тренажёрном зале. Тренер групповых направлений: стретчинг, шейпинг"
  },
  {
    name: "Залимханов Рамазан",
    role: "Тренер смешанных единоборств (ММА)",
    image: trainerRamazan,
    description: "Тренер смешанных единоборств (ММА)"
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
                <div className="absolute -top-6 left-0 right-0 mx-auto w-fit bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-center whitespace-normal max-w-[90%] leading-snug">
                  {trainer.role}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{trainer.name}</h3>
                <p className="text-zinc-400 mb-6">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

