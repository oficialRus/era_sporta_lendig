import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import logoImg from '../../assets/images/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'О нас', href: '#features' },
    { name: 'Классы', href: '#classes' },
    { name: 'Тренеры', href: '#trainers' },
    { name: 'Цены', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={logoImg} alt="IronForge Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Вступить</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 py-4 shadow-xl">
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold uppercase tracking-wider text-zinc-300 hover:text-red-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full">Вступить</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

