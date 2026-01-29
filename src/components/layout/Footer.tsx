import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import logoImg from '../../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <img src={logoImg} alt="IronForge Logo" className="h-12 w-auto" />
            </a>
            <p className="text-zinc-400 mb-6">
              Премиальный фитнес-клуб для тех, кто готов менять себя. Современное оборудование, профессиональные тренеры и атмосфера успеха.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Навигация</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-zinc-400 hover:text-red-600 transition-colors">Главная</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-red-600 transition-colors">О нас</a></li>
              <li><a href="#classes" className="text-zinc-400 hover:text-red-600 transition-colors">Программы</a></li>
              <li><a href="#trainers" className="text-zinc-400 hover:text-red-600 transition-colors">Команда</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-red-600 transition-colors">Абонементы</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                <span>ул. Спортивная 123,<br />Москва, Россия</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>info@ironforge.ru</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Режим работы</h3>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Пн - Пт</span>
                <span className="text-white">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Сб - Вс</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} IronForge Fitness. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
};

