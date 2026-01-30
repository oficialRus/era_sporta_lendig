import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const VKIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
  </svg>
);
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
              <a href="https://t.me/erasporta_apsheronsk" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all" aria-label="Telegram Эра Спорта">
                <TelegramIcon size={20} />
              </a>
              <a href="https://vk.com/erasporta.apsheronsk" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all" aria-label="ВКонтакте Эра Спорта">
                <VKIcon size={20} />
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
                <a href="https://yandex.ru/maps/10986/apsheronsk/house/ulitsa_sporta_2d/Z0AYcQRiSkwCQFpufXh3cH9qbA==/?ll=39.732395%2C44.461398&z=17" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors">Апшеронск, ул. Спорта 2Д</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a href="tel:+79180855258" className="hover:text-red-600 transition-colors">+7 (918) 085-52-58</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <a href="mailto:eeera_spoorta@mail.ru" className="hover:text-red-600 transition-colors">eeera_spoorta@mail.ru</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Режим работы</h3>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Пн - Пт</span>
                <span className="text-white">08:00–21:45</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Сб - Вс</span>
                <span className="text-white">09:00–19:45</span>
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
