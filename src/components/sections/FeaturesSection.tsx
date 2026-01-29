import { Section } from "../ui/Section";

const features = [
  {
    title: "Подбор под задачу",
    text: "Поможем выбрать материалы и посадку под тренировки, соревнования или повседневный стиль.",
  },
  {
    title: "Современный дизайн",
    text: "Аккуратная типографика, цветовые схемы и визуальная система бренда — без «колхоза».",
  },
  {
    title: "Качество и контроль",
    text: "Проверяем швы, фурнитуру и соответствие размерной сетке. Вы получаете ровный результат.",
  },
  {
    title: "Быстрые сроки",
    text: "Собираем заказ оперативно. Для срочных задач — подберём альтернативы без потери качества.",
  },
  {
    title: "Для команд и брендов",
    text: "Форма, мерч, комплекты для клубов, школ и компаний — с единым стилем.",
  },
  {
    title: "Поддержка после",
    text: "Подскажем уход, замену позиций и повторные заказы — чтобы всё служило долго.",
  },
];

export function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow="Почему мы"
      title="Понятный сервис и сильный результат"
      description="Быстро доводим от идеи до готового комплекта — с ясными шагами и аккуратной реализацией."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5"
          >
            <div className="text-base font-semibold text-white">{f.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

