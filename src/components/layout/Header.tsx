import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import logoUrl from "../../assets/images/logo.png";

const links: Array<{ href: string; label: string }> = [
  { href: "#features", label: "Преимущества" },
  { href: "#products", label: "Каталог" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070a11]/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight text-white hover:text-white/90"
          aria-label="ERA Sporta — на главную"
        >
          <img
            src={logoUrl}
            alt="ERA Sporta"
            className="h-8 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="hidden sm:inline">
            ERA <span className="text-sky-300">Sporta</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Навигация">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#contacts" variant="secondary" className="hidden sm:inline-flex">
            Связаться
          </Button>
          <Button href="#products" size="md">
            Смотреть товары
          </Button>
        </div>
      </Container>
    </header>
  );
}

