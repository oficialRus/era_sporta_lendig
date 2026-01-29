import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import heroBgUrl from "../../assets/images/hero-bg.png";

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#070a11] via-[#070a11]/85 to-[#070a11]/35" />
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
            Спорт. Стиль. Качество.
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            ERA Sporta — экипировка и одежда, которые работают вместе с вами
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Соберём комплект под вашу задачу: тренировки, команда, мерч или
            повседневный стиль. Быстро, аккуратно и с современным дизайном.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#products" size="lg">
              Открыть каталог
            </Button>
            <Button href="#contacts" size="lg" variant="secondary">
              Получить консультацию
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <Stat label="Сроки" value="от 3 дней" />
            <Stat label="Подбор" value="под задачу" />
            <Stat label="Дизайн" value="в комплекте" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-white/10">
            <img
              src={heroBgUrl}
              alt="Тренировка ERA Sporta"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070a11]/65 via-transparent to-[#070a11]/20" />
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:block" />
          <div className="pointer-events-none absolute -right-8 -top-8 hidden h-32 w-32 rounded-full border border-white/10 bg-white/5 backdrop-blur sm:block" />
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

