import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import boxingClassUrl from "../../assets/images/boxing-class.png";
import yogaClassUrl from "../../assets/images/yoga-class.png";
import trainerFemaleUrl from "../../assets/images/trainer-female.png";

const products = [
  {
    title: "Тренировочный комплект",
    text: "Лёгкие материалы, комфортная посадка, подходит для зала и улицы.",
    badge: "Хит",
    image: boxingClassUrl,
  },
  {
    title: "Командная форма",
    text: "Единый стиль, номера/фамилии, размеры под всех участников команды.",
    badge: "Для команд",
    image: trainerFemaleUrl,
  },
  {
    title: "Повседневная линейка",
    text: "Удобно, минималистично, легко сочетать — спорт-каэжуал на каждый день.",
    badge: "Новый",
    image: yogaClassUrl,
  },
];

export function ProductsSection() {
  return (
    <Section
      id="products"
      eyebrow="Каталог"
      title="Что можем собрать для вас"
      description="Пока здесь демо-позиции. Когда ты пришлёшь структуру/контент, я подставлю реальные товары, цены, фото и фильтры."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/5"
          >
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sky-500/15 blur-2xl transition group-hover:bg-sky-500/20" />

            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a11]/90 via-[#070a11]/35 to-transparent" />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  {p.badge}
                </div>
                <div className="mt-4 text-lg font-semibold text-white">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.text}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <Button href="#contacts" variant="secondary">
                    Узнать стоимость
                  </Button>
                  <Button href="#contacts" variant="ghost">
                    Задать вопрос
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

